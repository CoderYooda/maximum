<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::namespace('Api')->middleware(['cors', 'json.response'])->group(function () {
    Route::post('/register','AuthController@register');
    Route::post('/login','AuthController@login');

    Route::middleware('auth:api')->group(function (){
        Route::post('/logout','AuthController@logout');
    });
});



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
