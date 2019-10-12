<?php

namespace App\Services;


use App\Models\Team;
use App\Repositories\Interfaces\QuestionRepositoryInterface;
use App\Repositories\Interfaces\TeamRepositoryInterface;
use App\Utils\ResponseService;
use Symfony\Component\HttpFoundation\Response;

class GameService
{

    private $headers = [];

    /**
     * @var ResponseService
     */
    private $responseService;
    /**
     * @var TeamRepositoryInterface
     */
    private $teamRepo;
    /**
     * @var QuestionRepositoryInterface
     */
    private $questionRepo;

    public function __construct(
        TeamRepositoryInterface $teamRepository,
        QuestionRepositoryInterface $questionRepository
    )
    {
        $this->teamRepo = $teamRepository;
        $this->questionRepo = $questionRepository;
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
        if($error !== "")
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

        if (null === $teams || $teams->isEmpty() ) {
            $result = $this->makeUnSuccessfulBody();
        } else {

            foreach ($teams as $key => $team) {
                $teamScore = $this->getTeamScore($team, $game_id);
                $data[] = [
                    'team_name' => $team->name,
                    'score' => $teamScore
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
            $isCorrect = $answer->iscorrect;

            $question = $this->questionRepo->getQuestionByQuestionId($question_id);

            $totalScore += $isCorrect ? $question->score : -($question->score);
        }
        return $totalScore;
    }
}