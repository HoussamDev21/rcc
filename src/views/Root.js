import { Outlet } from "react-router-dom"
import GlobalLoader from "../components/GlobalLoader"
import Header from "../components/Header"

export default function Root() {
    return <div>
        <GlobalLoader />
        <Header />
        <Outlet />
    </div>
}