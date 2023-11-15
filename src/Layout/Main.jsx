import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../pages/shared/Navbar"
import Footer from "../pages/shared/Footer"



const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login")
  return (
    <div>
      {noHeaderFooter ||  <Navbar />}
        <Outlet />
        {noHeaderFooter || <Footer />}
    </div>
  )
}

export default Main