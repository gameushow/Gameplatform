<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'name'
    ];
    public function question()
    {
        return $this->hasMany('App\Models\Question','category_id');
    }
}
