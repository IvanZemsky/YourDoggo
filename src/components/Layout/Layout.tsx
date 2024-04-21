import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet, useLocation } from "react-router"
import { Suspense } from "react"

const Layout = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith('/shop');
  
  return (
    <>
      <Header/>
        <Suspense>
          <main>
            <Outlet/>
          </main>
        </Suspense>
      {!hideFooter && <Footer/> }
    </>
  )
}

export default Layout
