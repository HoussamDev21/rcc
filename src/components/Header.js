import { NavLink } from "react-router-dom"

export default function Header() {
    return <header className="bg-white/90 shadow sticky top-0 backdrop-blur z-50">
        <div className="container mx-auto lg:px-40 px-3">
            <div className="h-16 flex">
                <NavLink to={'/'} className="flex items-center gap-2">
                    <img src="/logo.png" className="w-8" />
                    <span className="text-lg font-medium sm:block hidden">Pokémon</span>
                </NavLink>
                <div className="flex-1"></div>
                <ul className="flex items-center gap-4">
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-sky-500' : ''}>All pokemons</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/types'} className={({ isActive }) => isActive ? 'text-sky-500' : ''}>Types</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </header> 
}