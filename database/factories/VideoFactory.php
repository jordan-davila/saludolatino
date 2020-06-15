<?php

use App\Video;
use Faker\Generator as Faker;

$factory->define(Video::class, function (Faker $faker) {
    return [
        'src' => '/videos/video' . rand(1, 16) . '.mp4',
    ];
});
