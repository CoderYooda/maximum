<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToModuleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('modules', function (Blueprint $table) {
            $table->bigInteger('module_template_id')->unsigned();
            $table->dropColumn('html');
            $table->dropColumn('name');
        });
        Schema::create('module_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('html');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('modules', function (Blueprint $table) {
            $table->dropColumn('module_template_id');
            $table->string('name');
            $table->longText('html');
        });
        Schema::dropIfExists('module_templates');
    }
}
