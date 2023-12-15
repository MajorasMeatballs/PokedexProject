import React from "react";
import PropTypes from "prop-types";
import {
    createTypes,
    CreatePokeImage,
    getPokemonIdFromUrl,
} from "./PokedexUtilities.jsx";
import { InertiaLink } from "@inertiajs/inertia-react";

function PokemonCards({ pokemonData }) {
    console.log("PokemonData in PokemonCards:", pokemonData);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pokemonData &&
                pokemonData.map((pokemon, index) => (
                    <InertiaLink
                        href={`/pokemon/${pokemon.name}`}
                        key={index}
                        className="text-black"
                    >
                        <div className="bg-white rounded p-4 shadow-md">
                            <h4 className="text-xl font-semibold mb-2">
                                {pokemon.name}
                            </h4>
                            {/* Todo other details */}
                            {createTypes(pokemon.types)}
                            <CreatePokeImage
                                pokeID={getPokemonIdFromUrl(pokemon.url)}
                            />
                        </div>
                    </InertiaLink>
                ))}
        </div>
    );
}

PokemonCards.propTypes = {
    pokemonData: PropTypes.array,
};

export default PokemonCards;
