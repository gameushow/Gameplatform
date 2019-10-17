<?php

namespace App\Repositories\Interfaces;

interface TeamQuestionRepositoryInterface
{
  public function createMultipleScore($team_question);
  public function updateSingleScore($team_question_id , $team_question);
}