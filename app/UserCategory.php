<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserCategory extends Model {
    public function users() {
        return $this->hasMany('App\User');
    }

    public function catgories() {
        return $this->hasMany('App\Category');
    }
}
