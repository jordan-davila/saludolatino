<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable {
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles() {
        return $this->belongsToMany('App\Role');
    }

    public function videos() {
        // If user is star return video_from_id else return videos_to_id
        return $this->roles->contains(2) ? $this->hasMany('App\Video', 'from_id') : $this->hasMany('App\Video', 'to_id');
    }

    public function categories() {
        return $this->belongsToMany('App\Category');
    }
}
