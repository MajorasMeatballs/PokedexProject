import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import PokemonDescription from "../components/PokemonDescription";
import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";

const PokemonDetails = ({ pokemonDetails, speciesData }) => {
    const { id } = usePage().props;
    const [abilities, setAbilities] = useState(null);
    const [loading, setLoading] = useState(true);
    const [types, setTypes] = useState(null);

    //for abilities

    useEffect(() => {
        if (!pokemonDetails) return;
        const abilitiesString = pokemonDetails.abilities.reduce(
            (prev, current, index) => {
                prev += current.ability.name;
                if (index < pokemonDetails.abilities.length - 1) {
                    prev += ", ";
                }
                return prev;
            },
            ""
        );
        setLoading(false);
        setAbilities(abilitiesString);
    }, [pokemonDetails]);

    //for type

    useEffect(() => {
        if (!pokemonDetails) return;
        const typesString = pokemonDetails.types.reduce(
            (prev, current, index) => {
                prev += current.type.name;
                if (index < pokemonDetails.abilities.length - 1) {
                    prev += ", ";
                }
                return prev;
            },
            ""
        );
        setLoading(false);
        setTypes(typesString);
    }, [pokemonDetails]);

    return (
        <Layout>
            <NavigationBar />
            <div>
                {loading && <p>Loading...</p>}
                {!loading && pokemonDetails && (
                    <div>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}
                            alt={pokemonDetails.name}
                        />
                        <h3>{pokemonDetails.name}</h3>
                        {pokemonDetails.types && <p>Type/s: {types}</p>}
                        {pokemonDetails.abilities && (
                            <p>Abilities: {abilities}</p>
                        )}
                        {pokemonDetails.abilities && (
                            <p>
                                Hidden Ability:{" "}
                                {pokemonDetails.abilities
                                    .filter((ability) => ability.is_hidden)
                                    .map((hiddenAbility) => (
                                        <span key={hiddenAbility.ability.name}>
                                            {hiddenAbility.ability.name}
                                        </span>
                                    ))}
                            </p>
                        )}
                        <PokemonDescription id={pokemonDetails.id} />
                    </div>
                )}
            </div>
        </Layout>
    );
};
export default PokemonDetails;
