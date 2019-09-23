<?php

namespace App\Repositories\Interfaces;

interface QuestionRepositoryInterface
{
    public function getQuestionByQuestionId($question_id);
}