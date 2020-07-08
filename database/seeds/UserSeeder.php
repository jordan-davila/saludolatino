<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {
    public function run() {
        $users = factory(App\User::class, 1000)->create()->each(function ($user) {
            $user->roles()->attach(3);
        });
        $estrellas = factory(App\User::class, 1000)->create()->each(function ($user) use ($users) {
            $user->roles()->attach(2);
            $user->categories()->attach(rand(2, 11));
            if (rand(0, 1)) $user->categories()->attach(1);;
            for ($i = 0; $i < rand(4, 12); $i++) {
                factory(App\Video::class)->create([
                    'from_id' => $user->id,
                    'to_id' => $users->random()->id,
                ]);
            }
        });
    }
}
