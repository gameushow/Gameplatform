<?php

namespace App\Repositories\Interfaces;

interface TeamQuestionRepositoryInterface
{
    public function findScoreByTeamQuestionId($team_question);
    public function findScoreByTeamQuestionIdWithRound($team_id,$question_id,$round,$game_id);
    public function createScore($team_question);
    public function updateSingleScore($team_question_id , $team_question);
    public function updateSingleScoreByTeamQuestionIdWithRound($team_id,$question_id,$round,$game_id,$team_question);
}