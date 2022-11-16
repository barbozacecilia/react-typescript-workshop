export type Pokemon = {
    "id": number,
    "name": {
      "english": string,
      "japanese": string,
      "chinese": string,
      "french": string
    },
    "type": Array<string>,
    "base": {
      "HP": number,
      "Attack": number,
      "Defense": number,
      "Sp. Attack": number,
      "Sp. Defense": number,
      "Speed": number
    }
}

export type PokemonResultItem ={
  name: string,
  url: string
}

export type PokemonsType = Array<Pokemon>