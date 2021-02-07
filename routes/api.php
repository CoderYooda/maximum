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

Route::namespace('Api')->middleware(['auth:api'])->group(function () {
    Route::get('/shop/categories','Shop\CategoryController@all');
    Route::post('/shop/categories/store','Shop\CategoryController@store');
    Route::delete('/shop/categories/delete','Shop\CategoryController@delete');

    Route::get('/shop/products','Shop\ProductController@all');
    Route::post('/shop/products/store','Shop\ProductController@store');
    Route::delete('/shop/products/delete','Shop\ProductController@delete');
});

