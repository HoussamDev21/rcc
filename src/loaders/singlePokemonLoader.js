import apiFetch from "../helpers/apiFetch"

export default async function singlePokemonLoader({ params }) {
    const response = await apiFetch(`/pokemon/${params.name}`)
    if (response.ok) {
        return await response.json()
    } else {
        throw new Response("Bad Request", { status: response.status })
    }
}