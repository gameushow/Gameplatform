<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CategoryService;
use App\Utils\ResponseService;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function __construct(
        CategoryService $categoryService
    )
    {
        $this->categoryService = $categoryService;
    }

    private function response($result = null){
        return JsonResponse::create($result, ResponseService::STATUS_SUCCESS);
    }

    public function getCategory($category_id){
        $result = $this->categoryService->getCategory($category_id);
        return $this->response($result);
    }

    public function getCategories(){
        $result = $this->categoryService->getCategories();
        return $this->response($result);
    }
}
