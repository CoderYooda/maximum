<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});
Auth::routes();


Route::get('/admin{any}', function () {
    return view('admin.index');
})->where('any', '.*');


Route::post('/callback/send', [App\Http\Controllers\PageController::class, 'callback']);
Route::get('/{slug}', [App\Http\Controllers\PageController::class, 'page'])->where('slug', '.*');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
