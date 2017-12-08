<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/uuid', function () {
  return uuid();
});

// 组织架构
Route::get('/api/structure/list', 'StructureController@list');
Route::get('/api/structure/add', 'StructureController@add');




