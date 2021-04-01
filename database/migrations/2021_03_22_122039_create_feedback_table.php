<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeedbackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feedback', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('image_id')->unsigned()->default(1);
            $table->string('name')->default('Имя не указано');
            $table->string('email')->default('Почта не указана');
            $table->text('comment')->nullable();
            $table->string('city')->default('Не указано');
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
        Schema::dropIfExists('feedback');
    }
}
