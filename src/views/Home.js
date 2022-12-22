import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { NavLink } from "react-router-dom"
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
        {items.map((pokemon) => (<div key={pokemon.name}>
            <NavLink to={`/pokemons/${pokemon.name}`}>{pokemon.name}</NavLink>
        </div>))}
        <ReactPaginate 
            breakLabel="..."
            nextLabel="next >"
            previousLabel="< previous"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.floor(total / PER_PAGE)}
            renderOnZeroPageCount={null}
        />
    </div>
}