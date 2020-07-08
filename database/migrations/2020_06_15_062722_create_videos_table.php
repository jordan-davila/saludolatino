<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('from_id')
                ->foreign('from_id')
                ->references('id')->on('users');
            $table->unsignedInteger('to_id')
                ->foreign('to_id')
                ->references('id')->on('users');
            $table->string('src');
            $table->string('thumbnail')->nullable();
            $table->boolean('private')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('videos');
    }
}
