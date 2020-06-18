<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Resources\Category as CategoryResource;

class CategoryController extends Controller {
    public function api() {
        return CategoryResource::collection(Category::all());
    }

    public function store(Request $request) {
        //
    }

    public function show(Category $category) {
        //
    }

    public function update(Request $request, Category $category) {
        //
    }

    public function destroy(Category $category) {
        //
    }
}
