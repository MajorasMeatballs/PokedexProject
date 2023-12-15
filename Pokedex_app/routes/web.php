<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/pokedex', [PageController::class, 'pokedex'])->name('pokedex');


use App\Http\Controllers\PokemonController;

Route::get('/pokemon/{id}', [PokemonController::class, 'getPokemonDetails']);
Route::get('/pokemon', [PokemonController::class, 'index']);
