import React from 'react'

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(eachPokemon => (
                <div key={eachPokemon}>{eachPokemon}</div>
            ))}
        </div>
    )
}

