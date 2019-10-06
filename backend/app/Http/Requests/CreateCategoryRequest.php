<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class CreateCategoryRequest extends BaseFormRequest
{
  public function authorize(){
    return true;
  }

  public function rules(Request $request){
    return [
      "name" => "required|string",
    ];
  }

  public function messages(){
    return [
      'name.required' => 'category_name is required',
    ];
  }
}