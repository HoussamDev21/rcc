import apiFetch from "../helpers/apiFetch"
import setLoading from "../helpers/setLoading"

export default async function pokemonsByTypeLoader({ params }) {
    setLoading(true)
    await new Promise((r => setTimeout(r, 500)))
    const response = await apiFetch(`/type/${params.name}`)
    if (response.ok) {
        const data = await response.json()
        setLoading(false)
        return data.pokemon.map(p => p.pokemon)
    } else {
        setLoading(false)
        throw new Response("Bad Request", { status: response.status })
    }
}