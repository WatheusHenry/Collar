<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('publication', function (Blueprint $table) {
            $table->id(); // Cria uma coluna id como chave primária auto_increment
            $table->timestamps();
            $table->unsignedBigInteger('user_id'); // Coluna para chave estrangeira user_id
            $table->unsignedBigInteger('animal_id'); // Coluna para chave estrangeira animal_id

            // Definindo as chaves estrangeiras
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('animal_id')->references('id')->on('animais')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('publication');
    }
};
