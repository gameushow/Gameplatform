<?php

namespace App\Repositories\Interfaces;

interface QuestionRepositoryInterface
{
    public function createQuestion($question);
    public function updateQuestionByQuestionId($question_id,$question);
    public function deleteQuestionByQuestionId($question_id);
    public function getQuestionByQuestionId($question_id);
    public function getQuestionsByGameId($game_id);
}