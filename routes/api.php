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



    Route::get('/common/news','Common\NewsController@all');
    Route::get('/common/news/{id}/get','Common\NewsController@get');
    Route::post('/common/news/store','Common\NewsController@store');
    Route::post('/common/news/{id}/update','Common\NewsController@update');
    Route::delete('/common/news/delete','Common\NewsController@delete');

    Route::get('/common/articles','Common\ArticleController@all');
    Route::get('/common/articles/{id}/get','Common\ArticleController@get');
    Route::post('/common/articles/store','Common\ArticleController@store');
    Route::post('/common/articles/{id}/update','Common\ArticleController@update');
    Route::delete('/common/articles/delete','Common\ArticleController@delete');

    Route::get('/common/actions','Common\ActionsController@all');
    Route::get('/common/actions/{id}/get','Common\ActionsController@get');
    Route::post('/common/actions/store','Common\ActionsController@store');
    Route::post('/common/actions/{id}/update','Common\ActionsController@update');
    Route::delete('/common/actions/delete','Common\ActionsController@delete');

    Route::get('/common/feedbacks','Common\FeedbackController@all');
    Route::get('/common/feedbacks/{id}/get','Common\FeedbackController@get');
    Route::post('/common/feedbacks/store','Common\FeedbackController@store');
    Route::post('/common/feedbacks/{id}/update','Common\FeedbackController@update');
    Route::delete('/common/feedbacks/delete','Common\FeedbackController@delete');

    Route::get('/common/employees','Common\EmployeeController@all');
    Route::get('/common/employees/{id}/get','Common\EmployeeController@get');
    Route::post('/common/employees/store','Common\EmployeeController@store');
    Route::post('/common/employees/{id}/update','Common\EmployeeController@update');
    Route::delete('/common/employees/delete','Common\EmployeeController@delete');

    Route::get('/common/clients','Common\ClientController@all');
    Route::get('/common/clients/{id}/get','Common\ClientController@get');
    Route::post('/common/clients/store','Common\ClientController@store');
    Route::post('/common/clients/{id}/update','Common\ClientController@update');
    Route::delete('/common/clients/delete','Common\ClientController@delete');

    Route::get('/common/vacancies','Common\VacancyController@all');
    Route::get('/common/vacancies/{id}/get','Common\VacancyController@get');
    Route::post('/common/vacancies/store','Common\VacancyController@store');
    Route::post('/common/vacancies/{id}/update','Common\VacancyController@update');
    Route::delete('/common/vacancies/delete','Common\VacancyController@delete');

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

    Route::get('/system/settings','System\SettingsController@all');
    Route::get('/system/settings/{id}/get','System\SettingsController@get');
    Route::post('/system/settings/update','System\SettingsController@update');
    Route::delete('/system/settings/delete','System\SettingsController@delete');

    Route::get('/system/prices','Common\PricesController@all');
    Route::get('/system/prices/{id}/get','Common\PricesController@get');
    Route::post('/system/prices/update','Common\PricesController@update');
    Route::delete('/system/prices/delete','Common\PricesController@delete');

    Route::get('/front/modules','Front\PageController@getModuleTemplates');

    Route::get('/content/{type}/{id}','Front\PageController@getContent');
});

