<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\Estrella as EstrellaResource;

class UserController extends Controller {
    public function estrellas() {
        return EstrellaResource::collection(User::limit(9)->where('role_id', 2)->get());
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
