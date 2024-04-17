import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router"
import { Suspense } from "react"

const Layout = () => {
  return (
    <>
      <Header/>
        <Suspense>
          <main>
            <Outlet/>
          </main>
        </Suspense>
      <Footer/>
    </>
  )
}

export default Layout
