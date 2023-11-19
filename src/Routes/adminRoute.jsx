import { Navigate, useLocation } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import useAuth from "../hooks/useAuth"


const adminRoute = (children) => {
    const [user, loading]= useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

   
    if(loading || isAdminLoading){
        return <div className="flex h-screen justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace />
}

export default adminRoute