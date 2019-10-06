<?php

namespace App\Services;

use App\Models\Category;
use App\Utils\ResponseService;
use App\Http\Requests\CreateCategoryRequest;
use App\Repositories\Interfaces\CategoryRepositoryInterface;

class CategoryService{
  public function __construct(
    ResponseService $responseService,
    CategoryRepositoryInterface $categoryRepository
  )
  {
    $this->responseService = $responseService;
    $this->categoryRepo = $categoryRepository;
    $this->initialHeader();
  }

  private function initialHeader(){
    $this->header = [
      'Content-Type' => 'application/json'
    ];
  }

  private function makeUnSuccessfulBody(){
    return [
      'success' => false,
      'code' => ResponseService::STATUS_BAD_REQUEST,
    ];
  }

  private function makeSuccessfulBody($data = []){
    return [
      'success' => true,
      'code' => ResponseService::STATUS_SUCCESS,
      'data' => $data
    ];
  }

  private function makeCreateSuccessful($data = []){
    return [
      'success' => true,
      'code' => ResponseService::STATUS_CREATE_SUCCESS,
      'data' => $data
    ];
  }
  public function getHeaders(): array{
    return $this->headers;
  }

  public function response($content, $status, $headers = []){
    $this->responseService->response($content, $status, $headers)->send();
  }

  public function getCategories(){
    $categories = $this->categoryRepo->getCategories();
    if(null == $categories || $categories->isEmpty()){
      $result = $this->makeUnSuccessfulBody();
    } else{
      $result = $this->makeSuccessfulBody($categories);
    }
    return $result;
  }

  public function getCategory($category_id){
    $category = $this->categoryRepo->getCategory($category_id);
    if(empty($category) || null == $category){
      return $this->makeUnSuccessfulBody();
    } else{
      $result = $this->makeSuccessfulBody($category);
    }
    return $result;
  }
  public function postCategory(CreateCategoryRequest $request){
    $category = $request->validated();
    $category = $this->categoryRepo->postCategory($category);
    $result = $this->makeCreateSuccessful($category);
    return $result;
  }

  public function deleteCategory($category_id){
    $category = $this->categoryRepo->deleteCategory($category_id);
    if(false === $category){
      return $this->makeUnSuccessfulBody("Can't found category for delete");
    }
    $result = $this->makeSuccessfulBody($category);
    return $result;
  }
}