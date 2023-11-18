import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaBook, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { IoMdHome, IoIosList, IoMdAdd } from "react-icons/io";
import { TbReservedLine } from "react-icons/tb";
import { IoReorderThreeOutline } from "react-icons/io5";
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()

    const isAdmin = true;
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-slate-300">
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>
                            <li> <NavLink to="/dashboard/admineHome"> <FaHome />  Admin Home</NavLink></li>
                            <li> <NavLink to="/dashboard/addItems"> <FaUtensils />  Add Items</NavLink></li>
                            <li> <NavLink to="/dashboard/manageItems"> <FaList /> Manage Items </NavLink></li>
                            <li> <NavLink to="/dashboard/bookings"> <FaBook />  Manage Bookings</NavLink></li>
                            <li> <NavLink to="/dashboard/allUsers"> <FaUser /> All Users</NavLink></li>

                        </> : <>

                            <li> <NavLink to="/dashboard/cart"> <FaShoppingCart />  My Cart {cart?.length}</NavLink></li>
                            <li> <NavLink to="/dashboard/userHome"> <IoMdHome />  User Home</NavLink></li>
                            <li> <NavLink to="/dashboard/reservation"> <TbReservedLine />  Reservation</NavLink></li>
                            <li> <NavLink to="/dashboard/review"> <IoMdAdd />  Review</NavLink></li>
                            <li> <NavLink to="/dashboard/userHome"> <IoIosList /> My Bookings</NavLink></li>
                        </>
                    }
                    <div className='divider'></div>
                    <li><NavLink to="/"><IoMdHome /> Home</NavLink></li>
                    <li><NavLink to="/order/salad"><IoReorderThreeOutline /> Menu</NavLink></li>
                    <li><NavLink to="/order/contact"><FaVoicemail />  Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard