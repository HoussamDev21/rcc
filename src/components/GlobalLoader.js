import Loader from "./Loader"
import PubSub from "pubsub-js"
import { useEffect, useState } from "react"

export default function GlobalLoader() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        PubSub.subscribe('loader', (_, value) => {
            setLoading(value)
        })
    }, [])

    if (!loading) return null

    return <div className="fixed inset-0 bg-white/90 z-[100] flex items-center justify-center text-sky-500">
        <Loader size={30} />
    </div>
}