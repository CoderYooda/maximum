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
    Route::get('/shop/categories/{id}/get','Shop\CategoryController@get');
    Route::post('/shop/categories/store','Shop\CategoryController@store');
    Route::post('/shop/categories/{id}/update','Shop\CategoryController@update');
    Route::delete('/shop/categories/delete','Shop\CategoryController@delete');

    Route::get('/shop/products','Shop\ProductController@all');
    Route::get('/shop/product/{id}/get','Shop\ProductController@get');
    Route::post('/shop/products/{id}/update','Shop\ProductController@update');
    Route::post('/shop/products/store','Shop\ProductController@store');
    Route::delete('/shop/products/delete','Shop\ProductController@delete');

    Route::post('/images/temp/store','System\ImageController@storeTemp');
    Route::post('/images/store','System\ImageController@storeImage');

    Route::get('/front/pages','Front\PageController@all');
    Route::get('/front/pages/{id}/edit','Front\PageController@get');
    Route::post('/front/pages/{id}/update','Front\PageController@update');
    Route::post('/front/pages/store','Front\PageController@store');

    Route::get('/front/modules','Front\PageController@getModuleTemplates');

    Route::get('/content/{type}/{id}','Front\PageController@getContent');
});

