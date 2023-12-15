import React, { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
import PokemonCards from "../components/PokemonCards";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import InfiniteScroll from "../components/InfiniteScroll";
import debounce from "lodash.debounce";

function Pokedex() {
    const { pokemonData } = usePage().props;
    const [loading, setLoading] = useState(false);
    const [fetchedPokemonData, setFetchedPokemonData] = useState([]);
    const [filteredPokemonData, setFilteredPokemonData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [limit, setLimit] = useState(30);
    const [offset, setOffset] = useState(0);

    //Fetch pokemon from the api

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
                );
                const { results } = await response.json();
                console.log("Pokemon limit", results.length, limit, offset);

                setFilteredPokemonData((prevData) => [...prevData, ...results]);
                setFetchedPokemonData((prevData) => [...prevData, ...results]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
                setLoading(false);
            }
        };
        fetchPokemon();
    }, [offset, limit]);

    // Infinite scroll

    const handleIntersection = useCallback(
        (entries) => {
            const target = entries[0];

            if (target.isIntersecting) {
                console.log(target);
                setOffset((prevOffset) => prevOffset + limit);
            }
        },
        [limit]
    );

    //Debounce search

    const debouncedSearch = useCallback(
        debounce(async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/?&q=${searchTerm}`
                );
                const { results } = await response.json();

                setFilteredPokemonData(results);
                setLoading(false);
            } catch (error) {
                console.error("Error searching for pokemon", error);
                setLoading(false);
            }
        }, 600),
        [searchTerm]
    );

    //Search bar filter

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
    };

    return (
        <Layout>
            <NavigationBar />

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search Pokemon..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="mt-7"
            />

            <>
                <PokemonCards
                    pokemonData={fetchedPokemonData?.filter((pokemon) =>
                        pokemon.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    )}
                />
                <InfiniteScroll onIntersection={handleIntersection} />
            </>
        </Layout>
    );
}

export default Pokedex;
