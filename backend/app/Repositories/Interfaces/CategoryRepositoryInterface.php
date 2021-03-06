<?php

namespace App\Repositories\Interfaces;

interface CategoryRepositoryInterface
{
  public function getCategories();
  public function getCategory($category_id);
  public function postCategory($category);
  public function updateCategory($category_id , $category);
  public function deleteCategory($category_id);
}