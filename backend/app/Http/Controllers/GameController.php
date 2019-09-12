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
     * @var TeamRepositoryInterface
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

    private function respone($result = null){
        return JsonResponse::create($result, Response::HTTP_OK);
    }

    public function getSortScore($game_id)
    {
        $result['data'] = $this->gameService->getSortedScore($game_id);
        return $this->respone($result);
    }
}
