import { useEffect, useState } from "react"
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import typeBgColors from "../data/typeBgColors"
import apiFetch from "../helpers/apiFetch"

export default function Home() {
    const [items, setItems] = useState([])
    const { name } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
		fetchData()
	}, [])

    const fetchData = async () => {
        const response = await apiFetch('/type')
        const data = await response.json()
        setItems(data.results)
        if (!name) {
            navigate(`/types/${data.results[0].name}`)
        }
    }

    return <div className="container mx-auto px-40 py-8">
        <div className="flex gap-8">
            <div className="w-52">
                <div className="text-xl font-medium mb-2">Types</div>
                {items.map((type) => (<NavLink 
                    key={type.name} 
                    className={`px-3 h-8 rounded-lg hover:bg-slate-100 flex items-center gap-3 cursor-pointer transition-all ${name === type.name ? 'bg-slate-200' : ''}`} 
                    to={`/types/${type.name}`}
                >
                    <div className={`w-4 h-4 rounded-full ${typeBgColors[type.name]}`} />
                    <span>{type.name}</span>
                </NavLink>))}
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    </div>
}