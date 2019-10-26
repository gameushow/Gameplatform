<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Services\QuestionService;
use App\Utils\ResponseService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


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
        return JsonResponse::create($result, $result['code']);
    }


    public function  getQuestions($game_id){
        $result = $this->questionService->getQuestions($game_id);
        return $this->response($result);
    }

    public function getQuestion($game_id,$question_id){
        $result = $this->questionService->getQuestion($question_id);
        return $this->response($result);
    }

    public function createQuestion(CreateQuestionRequest $request){
        $result = $this->questionService->createQuestion($request);
        return $this->response($result);
    }

    public function updateQuestion(UpdateQuestionRequest $request,$game_id,$question_id){
        $result = $this->questionService->updateQuestion($request,$question_id);
        return $this->response($result);
    }

    public function deleteQuestion($game_id,$question_id){
        $result = $this->questionService->deleteQuestion($question_id);
        return $this->response($result);
    }

}
