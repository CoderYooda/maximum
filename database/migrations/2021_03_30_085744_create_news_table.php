<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('image_id')->unsigned()->default(1);
            $table->bigInteger('slider_id')->unsigned()->default(1);
            $table->string('name')->default('Заголовок не указан');
            $table->text('content');
            $table->string('slug');
            $table->string('title');
            $table->text('description')->nullable();
            $table->boolean('isPublished')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}
