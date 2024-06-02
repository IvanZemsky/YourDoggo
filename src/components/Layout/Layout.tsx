import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet, useLocation } from "react-router"
import { Suspense } from "react"
import Loading from "../Loading/Loading"
import { RoutesEnum } from "@/constants/routes"

const {Gallery, Create} = RoutesEnum

const Layout = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith(`/${Gallery}`) && !location.pathname.includes(Create);
  
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
