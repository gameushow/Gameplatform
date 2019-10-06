<?php

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoryTableDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 3; $i++) {
            Category::create([
                'name' => str_random(8),
            ]);
        }
    }
}
