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
        for ($i=1; $i < 11; $i++) {
            for($u = 1; $u < 11; $u++){
                TeamQuestion::create([
                    'team_id' => $i,
                    'question_id' => $u,
                    'game_id' => 1,
                    'status' => random_int(-1,1),
                    'round' => $i,
                ]);
            }
        }
    }
}
