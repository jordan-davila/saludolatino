<?php

namespace App\Http\Resources;

use App\Http\Resources\Video as VideoResource;
use App\Http\Resources\Category as CategoryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class Star extends JsonResource {
    public function toArray($request) {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'avatar' => $this->avatar,
            'description' => $this->description,
            'price' => "$" . number_format($this->price, 2, '.', ','),
            'video' => [
                'isPlaying' => false,
                "options" => [
                    'muted' => false,
                    'language' => "en",
                    'controls' => false,
                    'preload' => "auto",
                    'poster' => ".." . $this->avatar,
                    'sources' => [
                        ['type' => "video/mp4", 'src' => ".." . $this->video_src]
                    ],
                ]
            ],
            'videos' => VideoResource::collection($this->videos),
            'categories' => CategoryResource::collection($this->categories),
        ];
    }
}
