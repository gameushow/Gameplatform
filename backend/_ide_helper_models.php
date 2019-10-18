<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Category
 *
 * @property int $id
 * @property string|null $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Question[] $question
 * @property-read int|null $question_count
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Category onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Category withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Category withoutTrashed()
 */
	class Category extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Game
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Question[] $question
 * @property-read int|null $question_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Team[] $team
 * @property-read int|null $team_count
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Game newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Game newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Game onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Game query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Game whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Game whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Game whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Game whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Game whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Game withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Game withoutTrashed()
 */
	class Game extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Question
 *
 * @property int $id
 * @property int $category_id
 * @property int $game_id
 * @property string $question
 * @property int $score
 * @property int $time
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Category $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\TeamQuestion[] $team
 * @property-read int|null $team_count
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Question onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereGameId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereQuestion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Question whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Question withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Question withoutTrashed()
 */
	class Question extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Team
 *
 * @property int $id
 * @property int $game_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\TeamQuestion[] $question
 * @property-read int|null $question_count
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Team onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team whereGameId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Team whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Team withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Team withoutTrashed()
 */
	class Team extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\TeamQuestion
 *
 * @property int $id
 * @property int $team_id
 * @property int $question_id
 * @property int $game_id
 * @property int $iscorrect
 * @property int $round
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Question $question
 * @property-read \App\Models\Team $team
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\TeamQuestion onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereGameId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereIscorrect($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereQuestionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereRound($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereTeamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TeamQuestion whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\TeamQuestion withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\TeamQuestion withoutTrashed()
 */
	class TeamQuestion extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

