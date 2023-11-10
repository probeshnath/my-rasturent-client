import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import MenuItem from '../shared/MenuItem'
import useMenu from '../../hooks/UseMenu'

const PopularMenu = () => {
  const [menu] = useMenu()
  const popularData = menu.filter(item => item.category === "popular")
    // const [menu, setMenu]= useState([])

    // useEffect(()=>{
    //   fetch('menu.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     const popularData = data.filter(item => item.category === "popular")
    //     setMenu(popularData)
    //   } )
    // },[])
    console.log(menu)
  return (
    <section className='mb-10 mt-10'>
        <SectionTitle heading={"From our Menu"} subHeading={"Popular Items"} />
        <div className='grid md:grid-cols-2 gap-4'>
            {
                popularData.map(item =>(
                    <MenuItem item={item} key={item._id} />
                ))
            }
        </div>
    </section>
  )
}

export default PopularMenu