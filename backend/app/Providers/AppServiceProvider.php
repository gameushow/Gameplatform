<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() !== 'production') {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }

        $models = array(
            'Game',
            'Team',
            'Question',
        );
        foreach ($models as $model) {
            $this->app->bind("App\Repositories\Interfaces\\{$model}RepositoryInterface", "App\Repositories\Eloquents\\{$model}Repository");
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
