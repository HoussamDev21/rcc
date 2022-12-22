import { useEffect, memo, useState } from "react"
import { NavLink } from "react-router-dom"
import apiFetch from "../../helpers/apiFetch"
import PokemonCard from "./Card"

export default function PokemonEvolutionChain({ id }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let response = await apiFetch(`/pokemon-species/${id}`)
        let data = await response.json()
        let url = data.evolution_chain.url
        response = await apiFetch(url)
        data = await response.json()
        const items = []
        flattenChain(data.chain, items)
        setItems(items)
    }

    const flattenChain = (evolution, accumulator) => {
        accumulator.push(evolution.species)
        const nextEvolution =  evolution?.evolves_to?.[0]
        if (nextEvolution) {
            flattenChain(nextEvolution, accumulator)
        }
    } 

    if (!items.length) return null

    return <>
        <div className="h-8" />
        <h1 className="capitalize text-xl font-medium">Evolution chain</h1>
        <div className="h-8" />
        <div className="flex flex-wrap gap-4">
            {items.map((pokemon) => (
                <NavLink to={`/pokemons/${pokemon.name}`} key={pokemon.name}>
                    <PokemonCard pokemon={pokemon} />
                </NavLink>
            ))}
        </div>
    </>
}