<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorites extends Model
{
	protected $table = 'favorites';

	protected $fillable = ['song_id', 'user_id', 'created_at', 'updated_at'];
}
