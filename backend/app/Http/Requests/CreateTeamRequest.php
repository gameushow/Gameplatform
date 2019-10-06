<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class CreateTeamRequest extends BaseFormRequest
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
            "game_id" => "required",
            "name" => "required|string",
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'game_id.required' => 'game_id is required',
            'name.required' => 'name is required',
        ];
    }
}
