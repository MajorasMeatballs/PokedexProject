<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class PokemonController extends Controller
{
    public function getPokemonDetails($id)
    {
        $client = new Client();

        $response = $client->get("https://pokeapi.co/api/v2/pokemon/{$id}");

        if ($response->getStatusCode() !== 200) {
            abort(404);
        }

        $pokemonDetails = json_decode($response->getBody(), true);

        $response = $client->get("https://pokeapi.co/api/v2/pokemon-species/{$id}");

        if ($response->getStatusCode() !== 200) {
            abort(404);
        }

        $speciesData = json_decode($response->getBody(), true);

        return Inertia::render('PokemonDetails', [
            'pokemonDetails' => $pokemonDetails,
            'speciesData' => $speciesData,
        ]);
    }
}