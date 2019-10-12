<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Symfony\Component\HttpFoundation\Response;

abstract class BaseFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    abstract public function authorize();

    /**
     * Get the validation rules that apply to the request.
     *
     * @param Request $request
     * @return array
     */
    abstract public function rules(Request $request);


    /**
     * @param Validator $validator
     */
    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();
        $errors = [
            'success' => false,
            'code' => Response::HTTP_UNPROCESSABLE_ENTITY,
            'error' => $this->formatErrors($errors),
        ];
        throw new HttpResponseException(\Illuminate\Http\JsonResponse::create($errors, Response::HTTP_UNPROCESSABLE_ENTITY));
    }

    protected function formatErrors($errors)
    {
        $errors = array_collapse($errors);
        return $errors;
    }
}
