<?php

namespace App\Repositories\Interfaces;

interface TeamQuestionRepositoryInterface
{
  public function createTeamQuestion();
  public function updateSingleScore($team_question_id , $team_question);
}