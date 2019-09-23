<?php

namespace App\Http\Controllers;

use App\Services\QuestionService;
use App\Utils\ResponseService;
use Illuminate\Http\JsonResponse;

/**
 * @property QuestionService questionService
 */
class QuestionController extends Controller
{
    public function __construct(
        QuestionService $questionService
    )
    {
        $this->questionService = $questionService;
    }

    private function response($result = null){
        return JsonResponse::create($result, ResponseService::STATUS_SUCCESS);
    }

    public function getQuestion($game_id,$question_id){
        $result = $this->questionService->getQuestion($question_id);
        return $this->response($result);
    }
}
