<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Team;
use Illuminate\Support\Arr;

class GameController extends Controller
{
    public function getSortScoreByGameId($game_id)
    {

        $team = new Team();
        $question = new Question();

        $teamInGames = $team->where('game_id',$game_id)->get();

        $result = [];

        foreach ($teamInGames as $teamInGame) {
            $team_name = $teamInGame->name;
            $answerInGame = $teamInGame->question()->get();
            $totalScore = 0;

            foreach ($answerInGame as $answer) {
                $question_id = $answer->question_id;
                $isCorrect = $answer->iscorrect;
                $score = $question->find($question_id)->score;

                if($isCorrect == true)
                    $totalScore += $score;
                elseif($isCorrect == false)
                    $totalScore -= $score;
            }

            $result[$team_name] = $totalScore;
            $result = array_reverse(Arr::sort($result));

        }
        return $result;
    }
}
