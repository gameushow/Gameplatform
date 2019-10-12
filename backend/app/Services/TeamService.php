<?php


namespace App\Services;

use App\Http\Requests\CreateTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use App\Repositories\Interfaces\TeamRepositoryInterface;
use Symfony\Component\HttpFoundation\Response;

/**
 * @property TeamRepositoryInterface teamRepository
 */
class TeamService
{
    public function __construct(
        TeamRepositoryInterface $teamRepository
    )
    {
        $this->teamRepository = $teamRepository;
    }

    /**
     * @param string $error
     * @return array
     */
    private function makeUnSuccessfulBody($error = "")
    {
        $result = [
            'success' => false,
            'code' => Response::HTTP_BAD_REQUEST,
        ];
        if ($error !== "")
            $result['error'] = $error;
        return $result;
    }

    /**
     * @param array $data
     * @param int $status
     * @return array
     */
    private function makeSuccessfulBody($data = [], $status = Response::HTTP_OK)
    {
        return [
            'success' => true,
            'code' => $status,
            'data' => $data,
        ];
    }

    public function getTeams($game_id)
    {
        $teams = $this->teamRepository->getTeamsByGameId($game_id);
        if (null === $teams || $teams->isEmpty()) {
            $result = $this->makeUnSuccessfulBody();
        } else {
            $result = $this->makeSuccessfulBody($teams);
        }
        return $result;
    }

    public function getTeam($team_id)
    {

        $team = $this->teamRepository->getTeamByTeamId($team_id);

        if (null === $team || empty($team)) {
            $result = $this->makeUnSuccessfulBody("Question not found");
        } else {
            $result = $this->makeSuccessfulBody($team);
        }
        return $result;
    }

    public function createTeam(CreateTeamRequest $request,$game_id)
    {
        $team = $request->validated();
        $this->teamRepository->createTeam($team);
        $teams = $this->getTeams($game_id);
        $result = $this->makeSuccessfulBody($teams['data'], Response::HTTP_CREATED);
        return $result;
    }

    public function updateTeam(UpdateTeamRequest $request, $team_id)
    {
        $team = $request->validated();
        $team = $this->teamRepository->updateTeamByTeamId($team_id, $team);
        if (false === $team) {
            return $this->makeUnSuccessfulBody("team not found");
        }
        $result = $this->makeSuccessfulBody($team);
        return $result;
    }

    public function deleteTeam($team_id)
    {
        $team = $this->teamRepository->deleteTeamByTeamId($team_id);
        if (false === $team) {
            return $this->makeUnSuccessfulBody("team not found");
        }
        $result = $this->makeSuccessfulBody($team);
        return $result;
    }
}