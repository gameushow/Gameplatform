<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUpdateTeamQuestionRequest;
use App\Http\Requests\UpdateSingleScoreRequest;
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

    public function getTeamScores(Request $request,$game_id)
    {
        $result = $this->scoreService->getTeamScores($game_id,$request);
        return $this->response($result);
    }

    public function createMultipleScore(CreateUpdateTeamQuestionRequest $request){
        $result = $this->scoreService->createMultipleScore($request);
        return $this->response($result);
    }
    
}
