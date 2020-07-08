<?php

namespace App\Http\Resources;

use App\Http\Resources\Category as CategoryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource {
    public function toArray($request) {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'avatar' => $this->avatar,
        ];
    }
}
