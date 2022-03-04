import { Fragment } from 'react';
import './wishlist.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import Deals from '../common/deals';

const items = [
  {
    source:
      'https://s1.thcdn.com/productimg/300/300/13598918-8744929379980696.jpg',
    title: 'Fuel Ambition Gift Box',
    price: 8000,
    discount: 30,
    rating: 4.2
  },
  {
    source:
      'https://s1.thcdn.com/productimg/300/300/13598922-1394929380171673.jpg',
    title: 'Vegan Bundle',
    price: 8000,
    discount: 30,
    rating: 4.2,
    nostock: true
  },
  {
    source:
      'https://static.thcdn.com/images/xsmall/webp//productimg/original/12949455-1834924183341159.jpg',
    title: 'Vegan Brownie',
    price: 8000,
    discount: 30,
    rating: 4.2
  }
];

export default function Wishlist() {
  return (
    <Fragment>
      <Navbar />
      <Category />
      <Deals items={items} close={true} name='Wishlist Items' />
      <Footer />
    </Fragment>
  );
}
