<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Game extends Model
{
    use SoftDeletes;

    public function team(){
        return $this->hasMany('App\Models\Team' , 'game_id');
    }

    public function question(){
        return $this->hasMany('App\Models\Question' , 'game_id');
    }
}
