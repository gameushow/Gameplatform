<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateSingleScoreRequest extends BaseFormRequest
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
            "status" => "required|integer|min:-1|max:1",
        ];
    }

    public function messages()
    {
        return [
            'game_id.required' => 'game_id is required',
            'status.required' => 'status is required',
        ];
    }
}
