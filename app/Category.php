<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    public function users() {
        return $this->hasManyThrough('App\User', 'App\UserCategory', 'category_id', 'id', 'id', 'user_id');
    }
}
