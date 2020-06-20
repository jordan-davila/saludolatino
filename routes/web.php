<?php

use Illuminate\Support\Facades\Route;

Route::get('/stars/{category?}');
Route::get('/{any?}', function () {
    return view('base');
})->where('any', '^(?!api\/)[\/\w\.-]*');
