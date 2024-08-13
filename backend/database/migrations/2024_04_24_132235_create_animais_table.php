<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animais', function (Blueprint $table) {
            $table->id();
            $table->string('animal_name');
            $table->integer('age');
            $table->enum('gender', ['M', 'F']);
            $table->text('description')->nullable();
            $table->enum('size', ['P','M','G','GG']);
            $table->float('weight');
            $table->string('temperament')->nullable();
            $table->unsignedBigInteger('status_id');
            $table->unsignedBigInteger('owner_id');
            $table->unsignedBigInteger('species_id');
            $table->timestamps();

            // Definindo as chaves estrangeiras
            $table->foreign('status_id')->references('id')->on('status_animal');
            $table->foreign('owner_id')->references('id')->on('users');
            $table->foreign('species_id')->references('id')->on('especies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('animais');
    }
}
