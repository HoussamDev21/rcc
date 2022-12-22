import apiFetch from "../helpers/apiFetch"

export default async function pokemonsByTypeLoader({ params }) {
    const response = await apiFetch(`/type/${params.name}`)
    if (response.ok) {
        const data = await response.json()
        return data.pokemon.map(p => p.pokemon)
    } else {
        throw new Response("Bad Request", { status: response.status })
    }
}