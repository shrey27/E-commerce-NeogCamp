import './checkout.css';
import { Fragment } from 'react';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import CheckoutCard from './CheckoutCard';

import { checkoutData } from '../common/constants';

export default function Checkout() {
  const { cartList } = checkoutData;
  return (
    <Fragment>
      <Navbar />
      <Category />
      <h1 className='lg cen xs-s mg-half'>CHECKOUT DETAILS</h1>
      <hr />
      <hr />
      <main className='checkout__container'>
        {cartList.map((elem, index) => {
          return <CheckoutCard {...elem} {...checkoutData} />;
        })}
      </main>
      <Footer />
    </Fragment>
  );
}
