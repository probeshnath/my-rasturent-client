import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { IoCartOutline } from "react-icons/io5";
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [cart] = useCart();
    const [isAdmin] = useAdmin()

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log("Logout")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const links = <>
        <li><Link to="/">Home</Link></li>
        {
            user && isAdmin && <li><Link to="/dashboard/admineHome">DashBoard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">DashBoard</Link></li>
        }
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order</Link></li>
        <li><Link to="/dashboard/cart">
            <button className="btn">
            <IoCartOutline className='text-2xl' /> 
                <div className="badge badge-secondary -my-10">{cart?.length}</div>
            </button>
            </Link>
        </li>
        {user ? <>

            <button onClick={handleLogout}>Logout</button>
            {/* <span>{user?.displayName}</span> */}
        </>
            :
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </>}
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl">
                        <div className='flex gap-2 items-center'>
                            <img className='w-14 h-14' src="https://i.ibb.co/6n74JwT/restaurant-logo-design-template-79169-56-removebg-preview.png" alt="" />
                            <h2 className='font-extrabold text-yellow-400'>Teast Treat </h2>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu items-center menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div></>
    )
}

export default Navbar