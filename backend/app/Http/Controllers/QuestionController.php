<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateQuestionRequest;
use App\Services\QuestionService;
use App\Utils\ResponseService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


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


    public function  getQuestions($game_id){
        $result = $this->questionService->getQuestions($game_id);
        return $this->response($result);
    }

    public function getQuestion($question_id){
        $result = $this->questionService->getQuestion($question_id);
        return $this->response($result);
    }

    public function createQuestion(CreateQuestionRequest $request){
        $result = $this->questionService->createQuestion($request);
        return $this->response($result);
    }
}
