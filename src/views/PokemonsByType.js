import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import PokemonCard from "../components/Pokemon/Card"
import apiFetch from "../helpers/apiFetch"

export default function PokemonsByType() {
    const { name } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchDataByType()
    }, [name])

    const fetchDataByType = async () => {
        const response = await apiFetch(`/type/${name}`)
        const data = await response.json()
        setItems(data.pokemon.map(p => p.pokemon))
    }
    
    return <div className="flex flex-wrap justify-center gap-4">
        {items.map((pokemon) => (
            <NavLink to={`/pokemons/${pokemon.name}`} key={pokemon.name}>
                <PokemonCard pokemon={pokemon} />
            </NavLink>
        ))}
    </div>
}