<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model {
    public function from_user() {
        return $this->belongsTo('App\User', 'from_id');
    }

    public function to_user() {
        return $this->belongsTo('App\User', 'to_id');
    }
}
