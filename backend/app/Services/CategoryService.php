<?php

namespace App\Services;

use App\Models\Category;
use App\Utils\ResponseService;
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
}