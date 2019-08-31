<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TeamQuestion extends Model
{
    use SoftDeletes;
    public function team(){
        return $this->belongsTo('App\Models\Team' , 'team_id' ,'id');
    }

    public function question(){
        return $this->belongsTo('App\Model\Question','question_id' ,'id');
    }
}
