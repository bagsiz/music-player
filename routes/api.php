<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api')->get('/categories', function (Request $request) {
    return \App\Categories::orderBy('id', 'DESC')->get();
});
Route::middleware('auth:api')->get('/category/{slug}', function (Request $request, $slug) {
    return \App\Categories::where('slug', $slug)->first();
});

