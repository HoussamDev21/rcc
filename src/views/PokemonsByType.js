import { NavLink, useLoaderData } from "react-router-dom"
import PokemonCard from "../components/Pokemon/Card"

export default function PokemonsByType() {
    const items = useLoaderData()
    
    return <div className="flex flex-wrap justify-center gap-4">
        {items.map((pokemon) => (
            <NavLink to={`/pokemons/${pokemon.name}`} key={pokemon.name}>
                <PokemonCard pokemon={pokemon} />
            </NavLink>
        ))}
    </div>
}