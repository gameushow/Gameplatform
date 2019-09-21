<?php

use App\Models\Game;
use Illuminate\Database\Seeder;

class GameTableDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 1; $i++) {
            Game::create([
                'name' => str_random(8),
            ]);
        }
    }
}
