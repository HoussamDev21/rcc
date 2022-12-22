import { NavLink } from "react-router-dom"

export default function Header() {
    return <div className="bg-white/80 shadow">
        <div className="container mx-auto px-40">
            <div className="h-16 flex">
                <NavLink to={'/'} className="flex items-center">POKEDEX</NavLink>
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
    </div> 
}