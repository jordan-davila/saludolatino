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

        // Filter By Category
        $users_result = $filters->has('limit') ? $users->limit($filters->input('limit'))->get() : $users->paginate(16);
        return StarResource::collection($users_result);
    }

    public function profile(User $user) {
        return new StarResource($user);
    }

    public function search(Request $request) {
        $users = User::whereHas('roles', function (Builder $query) {
            $query->where('name', 'like', 'Estrella');
        });

        if ($request->has('query')) {
            if ($request->input('query') != '') {
                $users->where(function (Builder $query) use ($request) {
                    $query->where('name', 'like', "%{$request->input('query')}%");
                });
            }
        }

        return StarResource::collection($users->limit(5)->get());
    }
}
