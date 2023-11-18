import { FaGoogle } from "react-icons/fa"
import useAuth from "../hooks/useAuth"
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleLogin()
        .then(res =>{
            console.log(res.user)
            const userInfo = {
                email: res.user.email,
                name: res.user.displayName
            }
            axiosPublic.post("/users",userInfo)
            .then(res =>{
                console.log(res)
                navigate("/")
            })
        })
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                     <FaGoogle className="mr-4 text-red-600" />
                    Google
                </button>
            </div>
        </div>
    )
}

export default SocialLogin