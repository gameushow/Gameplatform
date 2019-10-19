<?php
namespace App\Repositories\Interfaces;
interface GameRepositoryInterface
{
    public function getGamesByGameId($gameId);
}