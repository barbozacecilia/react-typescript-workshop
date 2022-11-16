import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonTable from "./components/table/PokemonTable";
import { PokemonResultItem } from "./assets/types";
import { POKEMONS } from "./assets/pokemons"
import axios from "axios";

function App() {
    const [pokemonList, setPokemonList] = useState<Array<PokemonResultItem> | null>(null)
    const [countPage, setCountPage] = useState<number>(0)
    const [previousPage, setPreviousPage] = useState<number>(0)
    const [nextPage, setNextPage] = useState<number>(0)
    const [selectedPage, setSelectedPage] = useState<number>(0)

    useEffect(() => {
        async function getPokemons() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${selectedPage * 20}`);
                setPokemonList(response.data.results)
                setCountPage(Math.ceil(response.data.count/20))
                console.log(response.data.results);
            } catch (error) {
                console.error(error);
            }
        }
        getPokemons()
    },
        [selectedPage])

    const onPageChangeCallback = (page: number) => {
        setSelectedPage(page-1)
    }

    return (
        <Container >
            <PokemonTable pokemons={pokemonList} count={countPage} previous={"1"} next={""} onPageChange={onPageChangeCallback} />
        </Container>
    )
}


export default App;