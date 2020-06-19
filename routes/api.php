<?php

use Illuminate\Support\Facades\Route;

Route::get('/stars/{category?}', 'UserController@stars');
Route::get('/categories', 'CategoryController@all');
