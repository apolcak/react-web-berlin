import { Outlet } from "react-router-dom"

import { Header, Footer } from "../components/Layout"

const SharedLayout = () => {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
        </section>
    )
}

export default SharedLayout