<?php

namespace App\Repositories\Eloquents;

use App\Models\Category;
use App\Repositories\Interfaces\CategoryRepositoryInterface;

class CategoryRepository implements CategoryRepositoryInterface
{
  public function __construct(){
    $this->category = new Category();
  }
  public function getCategories(){
    return $this->category->all();
  }
  public function getCategory($category_id){
    return $this->category->find($category_id);
  }
  public function postCategory($category){
    return $this->category->create($category);
  }
  public function updateCategory($category_id , $category){
    if(is_null($oldCategory = $this->category->find($category_id))){
        return false;
    }
    $oldCategory->update($category);
    return $this->category->find($category_id);
}
  public function deleteCategory($category_id){
    if(is_null($category = $this->category->find($category_id))){
      return false;
    }
    return $category->delete();
  }
}