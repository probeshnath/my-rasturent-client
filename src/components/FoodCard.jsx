import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, price,_id, recipe } = item;
    const navigate = useNavigate()
    const location = useLocation();
    const axiosSecure =  useAxiosSecure()
    const [,refetch] = useCart()

    const {user} = useAuth()

    const handleAddtoCart = (food) =>{
        console.log(food,user?.email)

        if(user && user?.email){
            // send cart item in the database
            const cartItem = {
                menuId : _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
            .then(res =>{
                // console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product added in your cart",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch cart to updated the  cart items count
                    refetch()
                }
            })
            .catch(error =>{
                console.log(error)
            })

        }else{
            Swal.fire({
                title: "You are not Login!!",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //  send the user to the login page
                    navigate("/login", { state:{from: location}})
                }
              });
        }

    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 py-1 rounded-md'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>{handleAddtoCart(item)}} className="btn btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard