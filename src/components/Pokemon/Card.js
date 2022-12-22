export default function PokemonCard({ pokemon }) {
    const imgSrc = () => {
        const id = pokemon.url.split('/').filter(s => s).pop()
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }

    return <div className="w-40 bg-slate-100 rounded-lg hover:text-sky-500 hover:bg-sky-100 transition-all">
        <div className="w-40 h-40 flex items-center justify-center">
            <img src={imgSrc()} className="w-32 h-32" />
        </div>
        <div className="px-4 pb-3 capitalize font-medium text-center">
            {pokemon.name}
        </div>
    </div>
}