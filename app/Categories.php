<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';

	protected $fillable = ['name', 'slug', 'cover', 'created_at', 'updated_at'];
}
