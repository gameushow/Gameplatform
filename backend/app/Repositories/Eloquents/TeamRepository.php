<?php

namespace App\Repositories\Eloquents;

use App\Models\Team;
use App\Repositories\Interfaces\TeamRepositoryInterface;

class TeamRepository implements TeamRepositoryInterface
{
    public function __construct(){
        $this->team = new Team();
    }

    public function getTeamsByGameId($gameId)
    {
        return $this->team->where('game_id',$gameId)->get();
    }
}