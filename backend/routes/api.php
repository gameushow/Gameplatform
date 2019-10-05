<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('game')->group(function () {
    Route::get('{game_id}/scores', 'GameController@getTeamScores');

    Route::get('{game_id}/questions', 'QuestionController@getQuestions');
    Route::get('{game_id}/question/{question_id}', 'QuestionController@getQuestion');
    Route::post('{game_id}/question', 'QuestionController@createQuestion');
});



