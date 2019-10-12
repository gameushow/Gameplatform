<?php

namespace App\Http\Requests;


use Illuminate\Http\Request;

class CreateQuestionRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @param Request $request
     * @return array
     */
    public function rules(Request $request)
    {
        return [
            "category_id" => "required",
            "game_id" => "required",
            "question" => "required|string",
            "score" => "required|string|min:0",
            "time" => "required|string|min:0",
        ];
    }

    public function messages()
    {
        return [
            'category_id.required' => 'category_id is required',
            'game_id.required' => 'game_id is required',
            'question.required' => 'question is required',
            'score.required' => 'score is required',
            'time.required' => 'time is required',
        ];
    }
}
