import { Fragment } from 'react';
import './wishlist.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import Deals from '../common/deals';
import {wishlist} from '../common/constants';

export default function Wishlist() {
  return (
    <Fragment>
      <Navbar />
      <Category />
      <Deals items={wishlist} close={true} name='Wishlist Items' />
      <Footer />
    </Fragment>
  );
}
