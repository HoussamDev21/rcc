import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiFetch from "../helpers/apiFetch"

export default function ViewPokemon() {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await apiFetch(`/pokemon/${name}`)
        const data = await response.json()
        setPokemon(data)
    }

    if (!pokemon) return null

    return <div className="container mx-auto px-40 py-8">
        {pokemon.name}
    </div>
}