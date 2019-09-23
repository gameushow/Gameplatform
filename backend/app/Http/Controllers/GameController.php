<?php

namespace App\Http\Controllers;

use App\Repositories\Interfaces\QuestionRepositoryInterface;
use App\Repositories\Interfaces\TeamRepositoryInterface;
use App\Services\GameService;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class GameController extends Controller
{
    /**
     * @var GameService
     */
    private $gameService;
    /**
     * @var TeamRepositoryInterface
     */
    private $teamRepo;
    /**
     * @var QuestionRepositoryInterface
     */
    private $questionRepo;

    /**
     *
     * @param GameService $gameService
     * @param TeamRepositoryInterface $teamRepo
     * @param QuestionRepositoryInterface $questionRepo
     */

    public function __construct(
        GameService $gameService,
        TeamRepositoryInterface $teamRepo,
        QuestionRepositoryInterface $questionRepo
    ){
        $this->gameService = $gameService;
        $this->teamRepo = $teamRepo;
        $this->questionRepo = $questionRepo;
    }

    private function response($result = null){
        return JsonResponse::create($result, Response::HTTP_OK);
    }

    public function getTeamScores($game_id)
    {
        $result = $this->gameService->getTeamScores($game_id);
        return $this->response($result);
    }
}
