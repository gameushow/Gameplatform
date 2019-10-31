<?php

namespace App\Http\Requests;


use Illuminate\Http\Request;

class CreateTeamQuestionRequest extends BaseFormRequest
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
            "data" => "required",
            "data.*.round" => "required",
            "data.*.question_id" => "required",
            "data.*.team_id" => "required",
            "data.*.game_id" => "required",
            "data.*.status" => "required|integer|min:-1|max:1",
        ];
    }

    public function messages()
    {
        return [
            'data.round.required' => 'data.round is required',
            'data.question_id.required' => 'data.question_id is required',
            'data.team_id.required' => 'data.team_id is required',
            'data.game_id.required' => 'data.game_id is required',
            'data.status.required' => 'data.status is required',
        ];
    }
}
