<?php

namespace App\Repositories\Interfaces;

interface TeamRepositoryInterface
{
    public function getTeamsByGameId($gameId);
}