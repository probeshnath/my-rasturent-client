import React from 'react'
import MenuItem from '../shared/MenuItem'
import Cover from '../shared/Cover'

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
    </div>
  )
}

export default MenuCategory