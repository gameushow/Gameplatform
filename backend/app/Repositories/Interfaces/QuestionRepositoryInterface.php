<?php

namespace App\Repositories\Interfaces;

interface QuestionRepositoryInterface
{
    public function getQuestionByQuestionId($question_id);
    public function getQuestionsByGameId($game_id);
}