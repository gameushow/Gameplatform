<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use App\Services\TeamService;
use Illuminate\Http\JsonResponse;

/**
 * @property TeamService teamService
 */
class TeamController extends Controller
{
    public function __construct(
        TeamService $teamService
    )
    {
        $this->teamService = $teamService;
    }

    private function response($result = null){
        return JsonResponse::create($result, $result['code']);
    }


    public function getTeams($game_id){
        $result = $this->teamService->getTeams($game_id);
        return $this->response($result);
    }

    public function getTeam($game_id,$team_id){
        $result = $this->teamService->getTeam($team_id);
        return $this->response($result);
    }

    public function createTeam(CreateTeamRequest $request,$game_id){
        $result = $this->teamService->createTeam($request,$game_id);
        return $this->response($result);
    }

    public function updateTeam(UpdateTeamRequest $request,$game_id,$team_id){
        $result = $this->teamService->updateTeam($request,$team_id);
        return $this->response($result);
    }

    public function deleteTeam($game_id,$team_id){
        $result = $this->teamService->deleteTeam($team_id);
        return $this->response($result);
    }
}
