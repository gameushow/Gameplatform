<?php

namespace App\Repositories\Eloquents;

use App\Models\Category;
use App\Repositories\Eloquents\GameRepositoryInterface;
use App\Repositories\Interfaces\CategoryRepositoryInterface;

class CategoryRepository implements CategoryRepositoryInterface
{
  public function __construct()
  {
    $this->category = new Category();
  }
  public function getCategories()
  {
    return $this->category->all();
  }
  public function getCategory($category_id)
  {
    return $this->category->find($category_id);
  }
}