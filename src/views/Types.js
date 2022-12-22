import { useEffect, useState } from "react"
import typeBgColors from "../data/typeBgColors"
import apiFetch from "../helpers/apiFetch"

export default function Home() {
    const [items, setItems] = useState([])

    useEffect(() => {
		fetchData()
	}, [])

    const fetchData = async () => {
        const response = await apiFetch(`/type`)
        const data = await response.json()
        setItems(data.results)
    }

    return <div className="container mx-auto px-40 py-8">
        {items.map((type) => (<div key={type.name} className={`p-3 rounded text-white ${typeBgColors[type.name]}`}>
            {type.name}
        </div>))}
    </div>
}