<?php

namespace App\Services;


use App\Models\Team;
use App\Repositories\Interfaces\QuestionRepositoryInterface;
use App\Repositories\Interfaces\TeamRepositoryInterface;
use App\Utils\ResponseService;
use Illuminate\Support\Arr;

class GameService {

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
        ResponseService $responseService,
        TeamRepositoryInterface $teamRepository,
        QuestionRepositoryInterface $questionRepository
    )
    {
        $this->responseService = $responseService;
        $this->teamRepo = $teamRepository;
        $this->questionRepo = $questionRepository;
        $this->initialHeader();
    }

    private function initialHeader(){
        $this->headers = [
            'Content-Type' => 'application/json'
        ];
    }

    /**
     * @return array
     */
    public function getHeaders(): array
    {
        return $this->headers;
    }

    public function response($content, $status, $headers = []){
        $this->responseService->response($content,$status,$headers)->send();
    }

    /**
     * Same as GetTeamScores but sorted
     *
     * @param $game_id
     * @return array|bool
     */

    public function getSortedScore($game_id){

        $result = false;
        $teamScores = $this->getTeamScores($game_id);
        $result = array_reverse(Arr::sort($teamScores));
        return $result;
    }

    /**
     * Get All Team Score that in that game
     *
     * @param $game_id
     * @return array|bool
     */
    public function getTeamScores($game_id){
        $teams = $this->teamRepo->getTeamsByGameId($game_id);

        $result = false;

        foreach ($teams as $team) {
            $teamScore = $this->getTeamScore($team,$game_id);
            $result[$team->name] = $teamScore;
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

    public function getTeamScore($team,$game_id){
        $answers = $team->question()->where('game_id',$game_id)->get();
        $totalScore = 0;
        foreach ($answers as $key => $answer) {

            $question_id = $answer->question_id;
            $isCorrect = $answer->iscorrect;

            $question = $this->questionRepo->getQuestionByQuestionId($question_id);

            $totalScore += $isCorrect?$question->score:-($question->score);
        }
        return $totalScore;
    }
}