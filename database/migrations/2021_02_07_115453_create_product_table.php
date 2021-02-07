<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->decimal('price')->default(0);
            $table->decimal('action_price')->default(0);
            $table->boolean('isAction')->default(0);
            $table->string('name');
            $table->bigInteger('category_id')->unsigned();
            $table->text('description');
            $table->boolean('inStock')->default(0);
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
        Schema::dropIfExists('product');
    }
}
