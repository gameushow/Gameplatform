<?php

use App\Models\TeamQuestion;
use Illuminate\Database\Seeder;

class TeamQuestionDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 16; $i++) {
            TeamQuestion::create([
                'team_id' => random_int(1,10),
                'question_id' => random_int(1,10),
                'game_id' => 1,
                'iscorrect' => random_int(0,1),
                'round' => random_int(1,2),
            ]);
        }
    }
}
