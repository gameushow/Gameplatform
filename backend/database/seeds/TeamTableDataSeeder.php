<?php

use App\Models\Team;
use Illuminate\Database\Seeder;

class TeamTableDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i < 11; $i++) {
            Team::create([
                'game_id' => 1,
                'name' => str_random(8),
            ]);
        }
    }
}
