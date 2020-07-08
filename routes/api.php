<?php

use Illuminate\Support\Facades\Route;

Route::get('/star/{user}', 'UserController@profile');
Route::get('/stars/{category?}', 'UserController@stars');
Route::get('/categories', 'CategoryController@all');
Route::get('/search/stars', 'UserController@search');
