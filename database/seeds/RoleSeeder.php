<?php

use App\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder {

    public function run() {
        Role::create(['name' => 'Admin']);
        Role::create(['name' => 'Estrella']);
        Role::create(['name' => 'Usuario']);
    }
}
