<?php

namespace App\Http\Resources;

use App\Http\Resources\User as UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class Video extends JsonResource {
    public function toArray($request) {
        return [
            "id" => $this->id,
            "from" => new UserResource($this->from_user),
            "to" => new UserResource($this->to_user),
            "thumbnail" => $this->thumbnail,
            'isPlaying' => false,
            "options" => [
                'muted' => false,
                'language' => "en",
                'controls' => true,
                'autoplay' => true,
                'preload' => "auto",
                'sources' => [
                    ['type' => "video/mp4", 'src' => "../../" . $this->src]
                ],
            ]
        ];
    }
}
