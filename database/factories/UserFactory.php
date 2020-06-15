<?php

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(User::class, function (Faker $faker) {
    static $picture_id = 1;
    static $video_id = 1;
    if ($picture_id == 51) $picture_id = 1;
    if ($video_id == 17) $video_id = 1;
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'avatar' => '/imgs/users/' . sprintf('%02d', $picture_id++) . '.jpg',
        'description' => $faker->realText($maxNbChars = 200, $indexSize = 1),
        'video_src' => '/videos/video' . rand(1, 16) . '.mp4',
        'price' => rand(25, 150),
        'remember_token' => Str::random(10),
    ];
});
