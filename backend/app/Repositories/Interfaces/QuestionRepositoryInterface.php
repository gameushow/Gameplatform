<?php

namespace App\Repositories\Interfaces;

interface QuestionRepositoryInterface
{
    public function getQuestionByQuestionId($questionId);
}