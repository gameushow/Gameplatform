<?php

namespace App\Services;


use App\Models\Team;
use App\Repositories\Interfaces\QuestionRepositoryInterface;
use App\Repositories\Interfaces\TeamRepositoryInterface;
use App\Utils\ResponseService;

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

    private function initialHeader()
    {
        $this->headers = [
            'Content-Type' => 'application/json'
        ];
    }

    /**
     * @return array
     */
    private function makeUnSuccessfulBody()
    {
        return [
            'success' => false,
            'code' => ResponseService::STATUS_BAD_REQUEST,
        ];
    }

    /**
     * @param array $data
     * @return array
     */
    private function makeSuccessfulBody($data = [])
    {
        return [
            'success' => true,
            'code' => ResponseService::STATUS_SUCCESS,
            'data' => $data,
        ];
    }


    /**
     * @return array
     */
    public function getHeaders(): array
    {
        return $this->headers;
    }

    /**
     * @param $content
     * @param $status
     * @param array $headers
     * @throws \Exception
     */
    public function response($content, $status, $headers = [])
    {
        $this->responseService->response($content, $status, $headers)->send();
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