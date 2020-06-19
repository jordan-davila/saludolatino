<?php

namespace App\Http\Controllers;

use App\User;
use App\Category;
use Illuminate\Http\Request;
use App\Http\Resources\Star as StarResource;
use Illuminate\Database\Eloquent\Builder;

class UserController extends Controller {

    public function stars(Request $filters) {
        // Get All Stars
        $users = User::whereHas('roles', function (Builder $query) {
            $query->where('name', 'like', 'Estrella');
        });

        // Filter By Category
        if ($filters->has('category')) {
            $users->whereHas('categories', function (Builder $query) use ($filters) {
                $query->where('slug', 'like', $filters->input('category'));
            });
        }

        return StarResource::collection($users->paginate(15));
    }

    public function create() {
    }

    public function store(Request $request) {
    }

    public function show($id) {
    }

    public function edit($id) {
    }

    public function update(Request $request, $id) {
    }

    public function destroy($id) {
    }
}
