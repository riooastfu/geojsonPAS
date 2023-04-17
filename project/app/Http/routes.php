<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TitikController;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', function () {
//     return view('home');
// });
Route::get('/', 'TitikController@index');
Route::get('/data/{blk}&{thn}', 'TitikController@dataCUS');
Route::get('/dataCrop/{blk}&{thn}&{bln}', 'TitikController@dataCrop');
