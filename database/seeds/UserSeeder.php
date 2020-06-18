<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {
    public function run() {
        $users = factory(App\User::class, 25)->create(['role_id' => 1]);
        $estrellas = factory(App\User::class, 25)->create(['role_id' => 2])->each(function ($user) use ($users) {
            App\UserCategory::create(['user_id' => $user->id, 'category_id' => rand(2, 11)]);
            if (rand(0, 1)) App\UserCategory::create(['user_id' => $user->id, 'category_id' => 1]);
            factory(App\Video::class, rand(3, 9))->create([
                'from_id' => $user->id,
                'to_id' => $users->random()->id,
            ]);
        });
    }
}
