<?php

use App\Models\Question;
use Illuminate\Database\Seeder;

class QuestionTableDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i < 11; $i++) {
            Question::create([
                'category_id' => random_int(1,2),
                'game_id' => 1,
                'question' => str_random(16),
                'score' => random_int(50,200),
                'time' => random_int(120,180),
            ]);
        }
    }
}
