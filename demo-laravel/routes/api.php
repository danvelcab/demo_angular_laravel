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

Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'project'], function(){
        Route::get('/', 'ProjectController@list');
        Route::get('/{id}', 'ProjectController@get');
        Route::post('/', 'ProjectController@store');
        Route::post('/{id}', 'ProjectController@update');
        Route::delete('/{id}', 'ProjectController@delete');
    });
});
