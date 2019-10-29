<?php

namespace App\Repositories\Eloquents;

use App\Models\TeamQuestion;
use App\Repositories\Interfaces\TeamQuestionRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * @property TeamQuestion team_question
 */
class TeamQuestionRepository implements TeamQuestionRepositoryInterface
{
    public function __construct()
    {
        $this->team_question = new TeamQuestion();
    }

    public function createScore($team_question)
    {
        return $this->team_question->create($team_question);
    }

    public function updateSingleScore($team_question_id, $team_question)
    {
        if (is_null($old_team_question = $this->team_question->find($team_question_id))) {
            return false;
        }
        $old_team_question->update($team_question);
        return $this->team_question->find($team_question_id);
    }

    public function findScoreByTeamQuestionId($team_question)
    {
        return $this->team_question->find($team_question);
    }

    public function findScoreByTeamQuestionIdWithRound($team_id, $question_id, $round, $game_id)
    {
        $criteria = [
            'team_id' => $team_id,
            'game_id' => $game_id,
            'question_id' => $question_id,
            'round' => $round
        ];
        $score = $this->team_question->where($criteria)->get();
        if($score->isEmpty()){
            return null;
        }
        return $score->first();

    }

    public function updateSingleScoreByTeamQuestionIdWithRound($team_id, $question_id, $round, $game_id, $team_question)
    {
        $criteria = [
            'team_id' => $team_id,
            'game_id' => $game_id,
            'question_id' => $question_id,
            'round' => $round
        ];
        $old_team_question = $this->team_question->where($criteria)->get();
        if ($old_team_question->isEmpty()) {
            return false;
        }else{
            $old_team_question = $old_team_question->first();
        }
        $old_team_question->update($team_question);
        return $this->team_question->where($criteria)->get()->first();
    }
}

