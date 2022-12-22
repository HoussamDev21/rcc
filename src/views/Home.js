import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { NavLink } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"
import apiFetch from "../helpers/apiFetch"

const PER_PAGE = 20
export default function Home() {
    const [page, setPage] = useState(1)
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
		fetchData()
	}, [page])

    const fetchData = async () => {
        const limit = PER_PAGE
        const offset = PER_PAGE * (page - 1)
        const response = await apiFetch(`/pokemon?limit=${limit}&offset=${offset}`)
        const data = await response.json()
        setItems(data.results)
        setTotal(data.count)
    }

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1)
    }

    

    return <div className="container mx-auto px-40 py-8">
        <div className="flex flex-wrap justify-center gap-4">
            {items.map((pokemon) => (
                <NavLink to={`/pokemons/${pokemon.name}`} key={pokemon.name}>
                    <PokemonCard pokemon={pokemon} />
                </NavLink>
            ))}
        </div>
        <div className="h-8" />
        <div className="flex justify-center">
            <ReactPaginate 
                breakLabel="..."
                nextLabel="next"
                previousLabel="previous"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={Math.ceil(total / PER_PAGE)}
                renderOnZeroPageCount={null}
                containerClassName="flex gap-4"
                pageLinkClassName="h-8 bg-slate-100 px-3 rounded-md flex items-center hover:text-sky-500 hover:bg-sky-100 transition-all"
                previousLinkClassName="h-8 bg-slate-100 px-4 rounded-md flex items-center hover:text-sky-500 hover:bg-sky-100 transition-all"
                nextLinkClassName="h-8 bg-slate-100 px-4 rounded-md flex items-center hover:text-sky-500 hover:bg-sky-100 transition-all"
                activeLinkClassName="text-white bg-sky-500"
            />
        </div>
    </div>
}