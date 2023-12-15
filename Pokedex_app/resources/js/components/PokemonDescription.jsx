import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const PokemonDescription = ({ id }) => {
    const [description, setDescription] = useState(null);

    useEffect(() => {
        const fetchPokemonSpecies = async () => {
            try {
                if (id) {
                    const response = await fetch(
                        `https://pokeapi.co/api/v2/pokemon-species/${id}`
                    );

                    if (response.ok) {
                        const speciesData = await response.json();

                        const englishFlavorText =
                            speciesData.flavor_text_entries
                                .filter((entry) => entry.language.name === "en")
                                .find((entry) => entry.flavor_text);

                        if (englishFlavorText) {
                            setDescription(
                                englishFlavorText.flavor_text.replace("", " ")
                            );
                        }
                    }
                }
            } catch (error) {
                console.error(
                    `Error fetching Description for ID ${id}:`,
                    error
                );
            }
        };

        fetchPokemonSpecies();
    }, [id]);

    return <div>{description && <p>Description: {description}</p>}</div>;
};

export default PokemonDescription;
