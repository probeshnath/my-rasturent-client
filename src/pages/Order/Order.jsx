import { useState } from 'react';
import Cover from '../shared/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/UseMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log("first menu", menu)


  const desserts = menu.filter(item => item.category === "dessert")
  const salad = menu.filter(item => item.category === "salad")
  const drinks = menu.filter(item => item.category === "drinks")
  const pizza = menu.filter(item => item.category === "pizza")
  const soup = menu.filter(item => item.category === "soup")
  const offered = menu.filter(item => item.category === "offered")
  return (
    <div>
        <Helmet>
            <title>Teast Treat | Order Food</title>
        </Helmet>
      <Cover img="https://i.ibb.co/T1DPYCH/food-delivery-companies.jpg" title="Order Food" />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>

      </Tabs>

    </div>
  )
}

export default Order