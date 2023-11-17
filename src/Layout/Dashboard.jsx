import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome, IoIosList, IoMdAdd } from "react-icons/io";
import { TbReservedLine } from "react-icons/tb";
import { IoReorderThreeOutline } from "react-icons/io5";
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart]= useCart()
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-slate-300">
                <ul className='menu p-4'>
                    <li> <NavLink to="/dashboard/cart"> <FaShoppingCart />  My Cart {cart?.length}</NavLink></li>
                    <li> <NavLink to="/dashboard/userHome"> <IoMdHome />  User Home</NavLink></li>
                    <li> <NavLink to="/dashboard/reservation"> <TbReservedLine />  Reservation</NavLink></li>
                    <li> <NavLink to="/dashboard/review"> <IoMdAdd />  Review</NavLink></li>
                    <li> <NavLink to="/dashboard/userHome"> <IoIosList /> My Bookings</NavLink></li>
                    <div className='divider'></div>
                    <li><NavLink to="/"><IoMdHome /> Home</NavLink></li>
                    <li><NavLink to="/menu"><IoIosList /> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><IoReorderThreeOutline /> Order</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard