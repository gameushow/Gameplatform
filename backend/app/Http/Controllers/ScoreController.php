<?php

namespace App\Http\Controllers;

use App\Services\GameService;
use App\Services\ScoreService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @property ScoreService scoreService
 */
class ScoreController extends Controller
{
    /**
     * @var GameService
     */
    private $gameService;

    /**
     *
     * @param ScoreService $scoreService
     */

    public function __construct(
        ScoreService $scoreService
    ){
        $this->scoreService = $scoreService;
    }

    private function response($result = null){
        return JsonResponse::create($result, $result['code']);
    }

    public function getTeamScores($game_id)
    {
        $result = $this->scoreService->getTeamScores($game_id);
        return $this->response($result);
    }
}