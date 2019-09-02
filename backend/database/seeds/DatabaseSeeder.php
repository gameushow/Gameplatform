<?php

use App\Models\TeamQuestion;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(GameTableDataSeeder::class);
         $this->call(TeamTableDataSeeder::class);
         $this->call(CategoryTableDataSeeder::class);
         $this->call(QuestionTableDataSeeder::class);
         $this->call(TeamQuestionDataSeeder::class);
    }
}
