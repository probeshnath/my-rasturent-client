import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="flex h-screen justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
    }

    if(user){
        return children;
    }

  return <Navigate state={{from: location}} to="/login" replace />
}

export default PrivateRoute