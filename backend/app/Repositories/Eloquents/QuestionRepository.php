<?php

namespace App\Repositories\Eloquents;


use App\Models\Question;
use App\Repositories\Interfaces\QuestionRepositoryInterface;

/**
 * @property Question question
 */
class QuestionRepository implements QuestionRepositoryInterface
{

    public function __construct()
    {
        $this->question = new Question();
    }

    public function createQuestion($question)
    {
        return $this->question->create($question);
    }

    public function getQuestionByQuestionId($question_id)
    {
        return $this->question->find($question_id);
    }

    public function getQuestionsByGameId($game_id)
    {
        return $this->question->where('game_id', $game_id)->get();
    }

    public function updateQuestionByQuestionId($question_id, $question)
    {
        if(is_null($question = $this->question->find($question_id))){
            return false;
        }
        $question->update($question);
        return $this->question->find($question_id);
    }

    public function deleteQuestionByQuestionId($question_id)
    {
        if(is_null($question = $this->question->find($question_id))){
            return false;
        }
        return $question->delete();
    }
}