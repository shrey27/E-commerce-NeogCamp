import React from 'react';
import Header from '../common/header';
import Navbar from '../common/navbar';
import Deals from '../common/deals';
import Banner from '../common/header/Banner';
import Footer from '../common/footer';
import './homepage.css';
import { homepageItems } from '../common/constants';

export default function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Deals
        items={[...homepageItems].slice(0, 5)}
        name='Top Deals'
        noButton={true}
      />
      <Banner source='carousal-3.jpeg' />
      <Deals
        items={[...homepageItems].slice(-5)}
        name='Best-Sellers'
        noButton={true}
      />
      <div className='flex-ct-ct xs-s'>
        <button className='btn btn--auth--solid btn--lg sb cen'>View All</button>
      </div>
      <Footer />
    </React.Fragment>
  );
}
