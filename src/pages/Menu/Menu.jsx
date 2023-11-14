import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../shared/Cover'
import PopularMenu from '../Home/PopularMenu'
import useMenu from '../../hooks/UseMenu'
import SectionTitle from '../../components/SectionTitle'
import MenuCategory from './MenuCategory'

const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter(item => item.category === "dessert")
  const salad = menu.filter(item => item.category === "salad")
  const drinks = menu.filter(item => item.category === "drinks")
  const pizza = menu.filter(item => item.category === "pizza")
  const soup = menu.filter(item => item.category === "soup")
  const offered = menu.filter(item => item.category === "offered")

  return (
    <div>
        <Helmet>
            <title>Teast Treat | Menu</title>
        </Helmet>
        <Cover img="https://i.ibb.co/HKhwCdd/pizza-bg.jpg" title="Our Menu"  />
        {/* main cover */}
        <SectionTitle subHeading={"Don't Miss"} heading="Today's Offer" />
        {/* offered menu item */}
        <MenuCategory items={offered} />
        {/* dessert menu item */}
        <MenuCategory
          items={desserts}
          title="Dessert"
          img="https://i.ibb.co/pxTC6R9/berry-cheesecake.jpg"
        />
         {/* pizza menu item */}
         <MenuCategory
          items={pizza}
          title="Pizza"
          img="https://i.ibb.co/c8g7Bmv/4812-jpg-wh860.jpg"
        />

         {/* drinks menu item */}
         <MenuCategory
          items={drinks}
          title="Drinks"
          img="https://i.ibb.co/jf8my7m/fresh-cocktails-with-ice-lemon-lime-fruits-generative-ai-188544-12370.jpg"
        />
          {/* salad menu item */}
          <MenuCategory
          items={salad}
          title="Salads"
          img="https://i.ibb.co/TcDpjmJ/Nicoise-Salad-main.jpg"
        />
          {/* soup menu item */}
          <MenuCategory
          items={soup}
          title="Soups"
          img="https://i.ibb.co/Jk34MT3/flat-lay-composition-various-soups-ingredients-flat-lay-composition-various-soups-ingredients-wooden.jpg"
        />
        
    </div>
  )
}

export default Menu