import axios from "axios"
import { useNavigate } from "react-router-dom"
import useAuth from '../hooks/useAuth'

 const axiosSecure = axios.create({
    baseURL:"http://localhost:5000"
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logoutUser} = useAuth()
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('token')
    // console.log("request stop by intercapter", token)
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function(error){
    //  do sometings with request error
    return Promise.reject(error)
  })

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function(response){
    return response;
  },async (error)=>{
    const status = error.response.status;
    // console.log("statuserror in the intercepter", status)
    //  for 401 or 403 logout the user and move the user to the login 
    if(status === 401 || status === 403){
      await logoutUser()
      navigate("/login")
    }
    return Promise.reject(error)
  })



  return axiosSecure;
}

export default useAxiosSecure