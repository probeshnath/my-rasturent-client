import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../shared/Cover'
import PopularMenu from '../Home/PopularMenu'

const Menu = () => {
  return (
    <div>
        <Helmet>
            <title>Teast Treat | Menu</title>
        </Helmet>
        <Cover img="https://i.ibb.co/HKhwCdd/pizza-bg.jpg" title="Our Menu"  />
        <PopularMenu />
        <Cover img="https://i.ibb.co/HKhwCdd/pizza-bg.jpg" title="Our Menu"  />
        <PopularMenu />
        <Cover img="https://i.ibb.co/HKhwCdd/pizza-bg.jpg" title="Our Menu"  />
        <PopularMenu />
    </div>
  )
}

export default Menu