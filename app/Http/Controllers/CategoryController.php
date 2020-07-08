<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Resources\Category as CategoryResource;

class CategoryController extends Controller {
    public function all(Request $filters) {
        // Check if Limit
        $category = ($filters->has('limit')) ? Category::limit($filters['limit'])->get() : Category::all();
        return CategoryResource::collection($category);
    }
}
