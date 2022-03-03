import React from 'react';
import Header from '../common/header';
import Navbar from '../common/navbar';
import Deals from '../common/deals';
import Banner from '../common/header/Banner';
import Footer from '../common/footer';
import './homepage.css';

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
    rating: 4.2
  },
  {
    source:
      'https://static.thcdn.com/images/xsmall/webp//productimg/original/12949455-1834924183341159.jpg',
    title: 'Vegan Brownie',
    price: 8000,
    discount: 30,
    rating: 4.2
  },
  {
    source:
      'https://s1.thcdn.com/productimg/300/300/12708205-7894888116404280.jpg',
    title: 'Protein Starter Pack',
    price: 8000,
    discount: 30,
    rating: 4.2
  },
  {
    source:
      'https://static.thcdn.com/images/xsmall/webp//productimg/original/10530943-1224889444460882.jpg',
    title: 'Impact Whey Protein',
    price: 8000,
    discount: 30,
    rating: 4.2
  },
  {
    source:
      'https://static.thcdn.com/images/xsmall/webp//productimg/original/12764004-1754853136850314.jpg',
    title: "MP Men's Gym T-Shirt",
    price: 8000,
    discount: 30,
    rating: 4.2
  },
  {
    source:
      'https://s1.thcdn.com/productimg/300/300/13598910-1234929379752087.jpg',
    title: 'Travel Bundle',
    price: 8000,
    discount: 30,
    rating: 4.2
  },
  {
    source:
      'https://s1.thcdn.com/productimg/300/300/12708205-7894888116404280.jpg',
    title: 'Protein Starter Pack',
    price: 8000,
    discount: 30,
    rating: 4.2
  }
];

export default function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Deals items={[...items].slice(0, 5)} />
      <Banner source='carousal-3.jpeg' />
      <Deals items={[...items].slice(-5)} />
      <div class='flex-ct-ct xs-s'>
        <button class='btn btn--all btn--lg sb cen'>View All</button>
      </div>
      <Footer />
    </React.Fragment>
  );
}
