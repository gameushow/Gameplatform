<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Team;
use App\Repositories\Interfaces\QuestionRepositoryInterface;
use App\Repositories\Interfaces\TeamRepositoryInterface;
use Illuminate\Support\Arr;

class GameController extends Controller
{

    /**
     * @var TeamRepositoryInterface
     */

    public function __construct(
        TeamRepositoryInterface $teamRepo,
        QuestionRepositoryInterface $questionRepo
    ){
        $this->teamRepo = $teamRepo;
        $this->questionRepo = $questionRepo;
    }

    public function getSortScoreByGameId($game_id)
    {
        
        $teamInGames = $this->teamRepo->getTeamsByGameId($game_id);

        $result = false;

        foreach ($teamInGames as $teamInGame) {
            $team_name = $teamInGame->name;
            $answerInGame = $teamInGame->question()->get();
            $totalScore = 0;

            foreach ($answerInGame as $answer) {
                $question_id = $answer->question_id;
                $isCorrect = $answer->iscorrect;
                $question = $this->questionRepo->getQuestionByQuestionId($question_id);
                if(null === $question)
                    return $result;

                if($isCorrect == true)
                    $totalScore += $question->score;
                elseif($isCorrect == false)
                    $totalScore -= $question->score;
            }

            $result[$team_name] = $totalScore;
            $result = array_reverse(Arr::sort($result));

        }
        return $result;
    }
}
