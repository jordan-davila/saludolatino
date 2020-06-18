<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategorySeeder extends Seeder {
    public function run() {
        Category::create(["name" => "Destacado"]);
        Category::create(["name" => "Actor"]);
        Category::create(["name" => "TV"]);
        Category::create(["name" => "Youtuber"]);
        Category::create(["name" => "Comediante"]);
        Category::create(["name" => "Musico"]);
        Category::create(["name" => "Cantante"]);
        Category::create(["name" => "Deportista"]);
        Category::create(["name" => "Instagrammer"]);
        Category::create(["name" => "Tiktoker"]);
        Category::create(["name" => "Twittero"]);
    }
}
