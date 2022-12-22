import { createBrowserRouter } from "react-router-dom"

// views
import Root from './views/Root'
import Home from './views/Home'
import ViewPokemon from './views/ViewPokemon'
import Types from './views/Types'
import PokemonsByType from './views/PokemonsByType'
import ErrorBoundary from './views/ErrorBoundary'

// loaders
import singlePokemonLoader from "./loaders/singlePokemonLoader"
import pokemonsByTypeLoader from "./loaders/pokemonsByTypeLoader"

export default createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				errorElement: <ErrorBoundary />,
				children: [
					{
						path: "/",
						element: <Home />,
					},
					{
						path: "/pokemons/:name",
						element: <ViewPokemon />,
						loader: singlePokemonLoader,
					},
					{
						path: "/types",
						element: <Types />,
						children: [
							{
								path: '/types/:name',
								element: <PokemonsByType />,
								loader: pokemonsByTypeLoader,
							}
						]
					},
				]
			}
		]
	},
])