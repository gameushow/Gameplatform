<?php

namespace App\Repositories\Eloquents;

use App\Models\TeamQuestion;
use App\Repositories\Interfaces\TeamQuestionRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TeamQuestionRepository implements TeamQuestionRepositoryInterface
{
  public function __construct(){
    $this->team_question = new TeamQuestion();
  }

  public function createMultipleScore($multipleData){
    //return DB::table('team_questions')->insert($multipleData);
    return $this->team_question->insert($multipleData);
  }

  public function updateSingleScore($team_question_id , $team_question){
    if (is_null($old_team_question = $this->team_question->find($team_question_id))) {
      return false;
    }
    $old_team_question->update($team_question);
    return $this->team_question->find($team_question_id);
  }
}

