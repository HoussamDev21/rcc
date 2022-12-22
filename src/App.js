import { useEffect } from "react"
import apiFetch from "./helpers/apiFetch"

export default function App() {
	useEffect(() => {
		apiFetch('/pokemon')
			.then(response => response.json())
			.then(data => console.log(data))
	}, [])

	return <div>App</div>
}