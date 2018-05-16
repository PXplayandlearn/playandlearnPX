<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayedQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('played_questions', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('score');
            $table->integer('user_played_game_id');
            $table->integer('question_id');
            $table->integer('answer_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('played_questions');
    }
}
