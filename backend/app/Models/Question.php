<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use SoftDeletes;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'category_id','game_id','question','score','time'
    ];

    public function category(){
        return $this->belongsTo('App\Models\Category');
    }
    public function team(){
        return $this->hasMany('App\Models\TeamQuestion','question_id');
    }
}
