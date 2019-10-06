<?php

namespace App\Repositories\Interfaces;

interface TeamRepositoryInterface
{
    public function createTeam($team);
    public function updateTeamByTeamId($team_id,$newTeam);
    public function deleteTeamByTeamId($team_id);
    public function getTeamByTeamId($team_id);
    public function getTeamsByGameId($gameId);
}