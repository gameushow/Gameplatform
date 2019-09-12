<?php

namespace App\Repositories\Eloquents;


use App\Models\Question;
use App\Repositories\Interfaces\QuestionRepositoryInterface;

class QuestionRepository implements QuestionRepositoryInterface
{
    public function __construct(){
        $this->question = new Question();
    }

    public function getQuestionByQuestionId($questionId)
    {
        return $this->question->find($questionId)->get()->first();
    }
}