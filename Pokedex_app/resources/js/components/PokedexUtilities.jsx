import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export function createTypes(types) {
    return (
        <ul className="list-disc pl-5 mb-2">
            {types ??
                [].map((type, typeIndex) => <li key={typeIndex}>{type}</li>)}
        </ul>
    );
}

export function getPokemonIdFromUrl(url) {
    const parts = url.split("/");
    return parts[parts.length - 2];
}

export function CreatePokeImage({ pokeID }) {
    console.log("pokeID in createPokeImage:", pokeID);

    return (
        <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`}
            alt={`Pokemon ${pokeID}`}
            className="max-w-full h-auto"
        />
    );
}
