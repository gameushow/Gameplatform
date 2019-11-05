<?php

namespace App\Repositories\Eloquents;

use App\Models\Game;
use App\Repositories\Interfaces\GameRepositoryInterface;

class GameRepository implements GameRepositoryInterface
{
    public function __construct(){
        $this->game = new Game();
    }

    public function getGamesByGameId($gameId)
    {
        return $this->game->find($gameId);
    }
}