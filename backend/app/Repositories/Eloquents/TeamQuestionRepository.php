<?php

namespace App\Repositories\Eloquents;

use App\Models\TeamQuestion;
use App\Repositories\Interfaces\TeamQuestionRepositoryInterface;

class TeamQuestionRepository implements TeamQuestionRepositoryInterface
{
  public function __construct(){
    $this->team_question = new TeamQuestion();
  }

  public function createTeamQuestion(){
    return $this->team_question->create();
  }

  public function updateSingleScore($team_question_id , $team_question){
    if (is_null($old_team_question = $this->team_question->find($team_question_id))) {
      return false;
    }
    $old_team_question->update($team_question);
    return $this->team_question->find($team_question_id);
  }
}

