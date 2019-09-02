<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_questions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('team_id');
            $table->unsignedBigInteger('question_id');
            $table->unsignedBigInteger('game_id');
            $table->boolean('iscorrect');
            $table->integer('round');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('team_questions', function (Blueprint $table) {
            $table->foreign('team_id')->references('id')->on('teams');
            $table->foreign('question_id')->references('id')->on('questions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team_questions');
    }
}
