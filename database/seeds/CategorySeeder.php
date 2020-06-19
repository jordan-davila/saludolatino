<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategorySeeder extends Seeder {
    public function run() {
        Category::create(["name" => "Destacados", "slug" => "destacados"]);
        Category::create(["name" => "Actores", "slug" => "actores"]);
        Category::create(["name" => "TV", "slug" => "tv"]);
        Category::create(["name" => "Youtubers", "slug" => "youtubers"]);
        Category::create(["name" => "Comediantes", "slug" => "comediantes"]);
        Category::create(["name" => "Musicos", "slug" => "musicos"]);
        Category::create(["name" => "Cantantes", "slug" => "cantantes"]);
        Category::create(["name" => "Deportistas", "slug" => "deportistas"]);
        Category::create(["name" => "Instagrammers", "slug" => "instagrammers"]);
        Category::create(["name" => "Tiktokers", "slug" => "tiktokers"]);
        Category::create(["name" => "Twitteros", "slug" => "twitteros"]);
    }
}
