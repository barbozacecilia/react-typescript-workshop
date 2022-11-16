import React from "react";
import { PokemonResultItem, Pokemon } from "../../assets/types";
import Table from '@mui/material/Table';
import { Typography } from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import {Box, TableBody, TableCell, Pagination, Stack} from '@mui/material/';


interface PokemonTableProps {
  pokemons: Array<PokemonResultItem> | null,
  count: number,
  next: string | null,
  previous: string,
  onPageChange: (page:number)=>void,
}

const PokemonTable = (props: PokemonTableProps) => {
  const { pokemons,count, onPageChange} = props;

  const [searchInput, setSearchInput] = useState<string>("")
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  const onCheckClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    console.log('pokemon', pokemon)
  }

  return (
    <Box> {!pokemons !== null ?
      <Stack>
        <TextField id="outlined-basic" 
        label="Buscar" 
        variant="standard" 
        value={searchInput} 
        type={"search"} 
        onChange={(event)=>{setSearchInput(event.target.value)}}/>
        <TableContainer component={Paper}>
             <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                 <TableRow>
                   <TableCell align="center">Name</TableCell>
                   <TableCell align="center">url</TableCell>
                   <TableCell align="center">Action</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody >
               {pokemons?.map(pokemon =>{return (
                  <TableRow key={pokemon.url}>
                    <TableCell>
                      {pokemon.name}
                    </TableCell>
                    <TableCell>
                      {pokemon.url}
                    </TableCell>
                    <TableCell>
                      boton
                    </TableCell>
                  </TableRow>
                )})} 
               </TableBody>
             </Table>
        </TableContainer>
        <Pagination onChange={(event,page)=>{onPageChange(page)}} count={count} />
      </Stack>
           :<Typography>loading...</Typography>}
    </Box>
  )
};
export default PokemonTable;
