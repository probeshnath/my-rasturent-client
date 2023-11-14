import React from 'react'
import MenuItem from '../shared/MenuItem'
import Cover from '../shared/Cover'
import { Link } from 'react-router-dom'

const MenuCategory = ({items,img, title}) => {
  return (
    <div className='mt-10'>
      { title &&  <Cover img={img} title={title}  />}
       <div className='grid md:grid-cols-2 py-8 gap-4'>
            {
                items.map(item =>(
                    <MenuItem item={item} key={item._id} />
                ))
            }
        </div>
        <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
    </div>
  )
}

export default MenuCategory