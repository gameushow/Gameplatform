<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TeamQuestion extends Model
{
    use SoftDeletes;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'game_id','status'
    ];
    public function team(){
        return $this->belongsTo('App\Models\Team' , 'team_id' ,'id');
    }

    public function question(){
        return $this->belongsTo('App\Models\Question','question_id' ,'id');
    }
}
