<?php

use App\Http\Controllers\ScoreController;
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
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token,Authorization');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('game')->group(function () {
    Route::get('{game_id}/scores', 'ScoreController@getTeamScores');

    Route::get('{game_id}/questions', 'QuestionController@getQuestions');
    Route::get('{game_id}/question/{question_id}', 'QuestionController@getQuestion');
    Route::post('{game_id}/question', 'QuestionController@createQuestion');
    Route::put('{game_id}/question/{question_id}', 'QuestionController@updateQuestion');
    Route::delete('{game_id}/question/{question_id}', 'QuestionController@deleteQuestion');

    Route::get('{game_id}/teams','TeamController@getTeams');
    Route::get('{game_id}/team/{team_id}','TeamController@getTeam');
    Route::post('{game_id}/team', 'TeamController@createTeam');
    Route::put('{game_id}/team/{team_id}', 'TeamController@updateTeam');
    Route::delete('{game_id}/team/{team_id}', 'TeamController@deleteTeam');

    Route::post('{game_id}/score' , 'ScoreController@createMultipleScore');
    Route::put('{game_id}/score/{team_question_id}' , 'ScoreController@updateSingleScore');
});

Route::get('category/{category_id}', 'CategoryController@getCategory');
Route::get('categories', 'CategoryController@getCategories');
Route::post('category', 'CategoryController@postCategory');
Route::put('category/{category_id}', 'CategoryController@updateCategory');
Route::delete('category/{category_id}', 'CategoryController@deleteCategory');






