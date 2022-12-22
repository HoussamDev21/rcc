import { NavLink, useLoaderData } from "react-router-dom"
import PokemonEvolutionChain from "../components/Pokemon/EvolutionChain"
import statIcons from "../data/statIcons"
import typeBgColors from "../data/typeBgColors"

export default function ViewPokemon() {
    const pokemon = useLoaderData()

    return <div className="container mx-auto px-40 py-8">
        <div className="flex gap-8">
            <div className="rounded-lg bg-slate-100 w-52 p-4">
                <img src={pokemon.sprites.front_default} className="w-full" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h1 className="capitalize text-2xl font-medium">{pokemon.name}</h1>
                    {pokemon.types.map((type) => (
                        <NavLink to={`/types/${type.type.name}`} key={type.type.name} className={`hover:bg-opacity-80 px-3 h-6 flex items-center rounded-full leading-none text-sm text-white ${typeBgColors[type.type.name]}`}>{type.type.name}</NavLink>
                    ))}
                </div>
                <div className="h-4" />
                {pokemon.stats.map((stat) => (
                    <div key={stat.stat.name} className="capitalize flex items-center gap-3">
                        <span className="text-slate-500" dangerouslySetInnerHTML={{ __html: statIcons[stat.stat.name] }} />
                        <span className="text-slate-500">{stat.stat.name.split('-').join(' ')}</span>
                        <span className="font-medium">{stat.base_stat}</span>
                    </div>
                ))}
            </div>
        </div>
        <PokemonEvolutionChain id={pokemon.id} />
    </div>
}