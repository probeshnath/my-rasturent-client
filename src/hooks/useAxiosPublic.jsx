import axios from "axios"

const axiosPublic = axios.create({
    baseURL: "https://my-restaurant-server-six.vercel.app"
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic