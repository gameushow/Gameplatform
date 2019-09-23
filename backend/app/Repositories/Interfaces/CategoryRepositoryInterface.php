<?php

namespace App\Repositories\Interfaces;

interface CategoryRepositoryInterface
{
  public function getCategories();
  public function getCategory($category_id);
}