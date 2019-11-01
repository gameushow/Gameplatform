<?php

namespace App\Services;

use App\Http\Requests\CreateUpdateTeamQuestionRequest;
use App\Http\Requests\UpdateSingleScoreRequest;
use App\Models\Team;
use App\Models\TeamQuestion;
use App\Repositories\Interfaces\QuestionRepositoryInterface;
use App\Repositories\Interfaces\TeamQuestionRepositoryInterface;
use App\Repositories\Interfaces\TeamRepositoryInterface;
use App\Utils\ResponseService;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\Response;

class ScoreService
{

    /**
     * @var TeamRepositoryInterface
     */
    private $teamRepo;
    /**
     * @var QuestionRepositoryInterface
     */
    private $questionRepo;

    /**
     * @var TeamQuestionRepositoryInterface
     */
    private $teamQuestionRepo;


    public function __construct(
        TeamRepositoryInterface $teamRepository,
        QuestionRepositoryInterface $questionRepository,
        TeamQuestionRepositoryInterface $teamQuestionRepository
    )
    {
        $this->teamRepo = $teamRepository;
        $this->questionRepo = $questionRepository;
        $this->teamQuestionRepo = $teamQuestionRepository;
    }

    /**
     * @param string $error
     * @return array
     */
    private function makeUnSuccessfulBody($error = "")
    {
        $result = [
            'success' => false,
            'code' => Response::HTTP_BAD_REQUEST,
        ];
        if ($error !== "")
            $result['error'] = $error;
        return $result;
    }

    /**
     * @param array $data
     * @param int $status
     * @return array
     */
    private function makeSuccessfulBody($data = [], $status = Response::HTTP_OK)
    {
        return [
            'success' => true,
            'code' => $status,
            'data' => $data,
        ];
    }

    /**
     * Get all score of team and sort rank.
     *
     * @param $game_id
     * @return array
     */

    public function getTeamScores($game_id)
    {
        $teams = $this->teamRepo->getTeamsByGameId($game_id);

        if (null === $teams || $teams->isEmpty()) {
            $result = $this->makeUnSuccessfulBody();
        } else {
            foreach ($teams as $key => $team) {
                $teamScore = $this->getTeamScore($team, $game_id);
                $data[$key] = [
                    'id' => $team->id,
                    'game_id' => $game_id,
                    'name' => $team->name,
                    'created_at' => $team->created_at,
                    'updated_at' => $team->updated_at,
                    'deleted_at' => $team->deleted_at,
                    'score' => $teamScore,
                    'score_history' => $team->question()->where('game_id', $game_id)->get()
                ];
            }
            usort($data,
                function ($firstTeam, $secondTeam) {
                    if ($firstTeam['score'] === $secondTeam['score']) {
                        return 0;
                    }
                    return ($firstTeam['score'] > $secondTeam['score']) ? -1 : 1;
                });

            $result = $this->makeSuccessfulBody($data);
        }
        return $result;
    }

    /**
     * Get Individual Score for each team with game_id
     *
     * @param Team $team
     * @param $game_id
     * @return int
     */

    public function getTeamScore($team, $game_id)
    {
        $answers = $team->question()->where('game_id', $game_id)->get();
        $totalScore = 0;

        if ($answers->isEmpty() || null === $answers)
            return $totalScore;
        foreach ($answers as $key => $answer) {

            $question_id = $answer->question_id;
            $status = $answer->status;

            $question = $this->questionRepo->getQuestionByQuestionId($question_id);
            if(is_null($question)){

            if (-1 === $status) {
                $totalScore -= $question->score;
            } elseif (1 === $status) {
                $totalScore += $question->score;
            } else {
                continue;
            }
            else{
                if(-1 === $status){
                    $totalScore -= $question->score;
                }elseif(1 === $status){
                    $totalScore += $question->score;
                }else{
                    continue;
                }
            }
        }
        return $totalScore;
    }

    public function createMultipleScore(CreateUpdateTeamQuestionRequest $request)
    {
        $score = $request->validated();
        $score = $score['data'];
        $result = [];

        foreach ($score as $key => $item) {
            $team_question = $this->teamQuestionRepo->findScoreByTeamQuestionIdWithRound($item['team_id'], $item['question_id'], $item['round'], $item['game_id']);
            if (null !== $team_question) {
                $result[$key] = $item;
                $updateResponse = $this->teamQuestionRepo->updateSingleScoreByTeamQuestionIdWithRound($item['team_id'], $item['question_id'], $item['round'], $item['game_id'], [$team_question]);

                $result[$key]['action'] = "update";
                if (false === $updateResponse) {
                    $result[$key]['success'] = false;
                } else {
                    $result[$key]['success'] = true;
                }
                $team = $this->teamRepo->getTeamByTeamId($item['team_id']);
                $result[$key]['totalscore'] = $this->getTeamScore($team, $item['game_id']);
            } else {
                $result[$key] = $this->teamQuestionRepo->createScore($item);
                $result[$key]['action'] = "create";
                if ($result[$key] === null || empty($result[$key])) {
                    $result[$key]['success'] = false;
                } else {
                    $result[$key]['success'] = true;
                }
                $team = $this->teamRepo->getTeamByTeamId($item['team_id']);
                $result[$key]['totalscore'] = $this->getTeamScore($team, $item['game_id']);
            }
    public function updateSingleScore(UpdateSingleScoreRequest $request ,$game_id, $team_question_id){
        $score = $request->validated();
        $score = $this->teamQuestionRepo->updateSingleScore($team_question_id , $score);
        if (false === $score) {
            return $this->makeUnSuccessfulBody("Team Question not found");
        }
        return $this->makeSuccessfulBody($result);
    }
}