import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet, useLocation } from "react-router"
import { Suspense } from "react"
import Loading from "../Loading/Loading"

const Layout = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith('/gallery');
  
  return (
    <>
      <Header/>
        <Suspense fallback={<Loading/>}>
          <main>
            <Outlet/>
          </main>
        </Suspense>
      {!hideFooter && <Footer/>}
    </>
  )
}

export default Layout
