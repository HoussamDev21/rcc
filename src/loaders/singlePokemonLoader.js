import apiFetch from "../helpers/apiFetch"
import setLoading from "../helpers/setLoading"

export default async function singlePokemonLoader({ params }) {
    setLoading(true)
    await new Promise((r => setTimeout(r, 500)))
    const response = await apiFetch(`/pokemon/${params.name}`)
    if (response.ok) {
        setLoading(false)
        return await response.json()
    } else {
        setLoading(false)
        throw new Response("Bad Request", { status: response.status })
    }
}