import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { MdDelete } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import Swal from 'sweetalert2'

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    // admin user
    const handleMakeAdmin = (user) =>{
        // 
        console.log('"admin user')
    }


    // handle delete user
    const handleDeleteUser = (user) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }
    return (
        <div>
            <div className='flex justify-evenly my-4'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, inx) => (
                                <tr key={user._id}>
                                    <th>{inx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => handleMakeAdmin(user)} className="btn"><FaUser className='text-blue-600 text-xl' /></button>
                                     </td>

                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn"><MdDelete className='text-red-600 text-xl' /></button>
                                     </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AllUsers