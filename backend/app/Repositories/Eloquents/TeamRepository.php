<?php

namespace App\Repositories\Eloquents;

use App\Models\Team;
use App\Repositories\Interfaces\TeamRepositoryInterface;

/**
 * @property Team team
 */
class TeamRepository implements TeamRepositoryInterface
{
    public function __construct(){
        $this->team = new Team();
    }

    public function createTeam($team)
    {
        return $this->team->create($team);
    }

    public function updateTeamByTeamId($team_id, $newTeam)
    {
        if(is_null($oldTeam = $this->team->find($team_id))){
            return false;
        }
        $oldTeam->update($newTeam);
        return $this->team->find($team_id);
    }

    public function deleteTeamByTeamId($team_id)
    {
        if(is_null($team = $this->team->find($team_id))){
            return false;
        }
        return $team->delete();
    }

    public function getTeamByTeamId($team_id)
    {
        return $this->team->find($team_id);
    }

    public function getTeamsByGameId($gameId)
    {
        return $this->team->where('game_id',$gameId)->get();
    }
}