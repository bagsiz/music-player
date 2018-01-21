<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Songs extends Model
{
	protected $table = 'songs';

	protected $fillable = ['name', 'slug', 'created_at', 'updated_at'];
}
