<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {
    public function run() {
        $users = factory(App\User::class, 25)->create(['role_id' => 1]);
        $talents = factory(App\User::class, 25)->create(['role_id' => 2])->each(function ($user) use ($users) {
            factory(App\Video::class, rand(3, 9))->create([
                'from_id' => $user->id,
                'to_id' => $users->random()->id,
            ]);
        });
    }
}
