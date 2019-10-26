<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Team extends Model
{
    use SoftDeletes;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'game_id','name'
    ];

    public function question(){
        return $this->hasMany('App\Models\TeamQuestion' , 'team_id');
    }
}
