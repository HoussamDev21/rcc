import { useEffect, useMemo, useState } from "react"
import ReactPaginate from "react-paginate"
import { NavLink, useSearchParams } from "react-router-dom"
import EmptyBlock from "../components/EmptyBlock"
import PokemonCard from "../components/Pokemon/Card"
import apiFetch from "../helpers/apiFetch"

const PER_PAGE = 20
export default function Home() {
    const [page, setPage] = useState(1)
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const [pending, setPending] = useState(true)

    const initialPage = useMemo(() => {
        return Number(searchParams.get('page')) || 1
    }, [searchParams])

    useEffect(() => {
        fetchData()
    }, [page, searchParams])

    const fetchData = async () => {
        setPending(true)
        const page = Number(searchParams.get('page')) || 1
        const limit = PER_PAGE
        const offset = PER_PAGE * (page - 1)
        await new Promise((r => setTimeout(r, 500)))
        const response = await apiFetch(`/pokemon?limit=${limit}&offset=${offset}`)
        const data = await response.json()
        setItems(data.results)
        setTotal(data.count)
        setPending(false)
    }

    const handlePageClick = ({ selected }) => {
        setSearchParams({ page: selected + 1 })
        setPage(selected + 1)
    }

    return <div className="container mx-auto px-40 py-8">
        <div className="flex flex-wrap justify-center gap-4">
            {
                pending
                    ? Array.from(Array(20)).map((_, index) => (<div key={index} className="w-40 h-40 rounded-lg placeholder-content"></div>))
                    : !items.length 
                        ? <EmptyBlock body="No data in this page yet" />
                        : items.map((pokemon) => (
                            <NavLink to={`/pokemons/${pokemon.name}`} key={pokemon.name}>
                                <PokemonCard pokemon={pokemon} />
                            </NavLink>
                        ))
            }
        </div>
        <div className="h-8" />
        <div className="flex justify-center select-none">
            {!!total && <ReactPaginate
                forcePage={initialPage - 1}
                breakLabel="..."
                nextLabel="next"
                previousLabel="previous"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={Math.ceil(total / PER_PAGE)}
                renderOnZeroPageCount={null}
                containerClassName="flex gap-3"
                pageLinkClassName="h-8 px-3 rounded-md flex items-center hover:text-sky-500 hover:bg-sky-100 transition-all"
                previousLinkClassName="h-8 px-4 rounded-md flex items-center hover:text-sky-500 hover:bg-sky-100 transition-all"
                nextLinkClassName="h-8 px-4 rounded-md flex items-center hover:text-sky-500 hover:bg-sky-100 transition-all"
                activeLinkClassName="text-white bg-sky-500"
            />}
        </div>
    </div>
}