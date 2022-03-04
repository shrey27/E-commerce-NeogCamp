import { Fragment } from 'react';
import './address.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import Address from './';

export default function AddressSelection() {
  return (
    <Fragment>
      <Navbar />
      <Category />
      <div class='flex-ct-ct flex-vertical'>
        <Address select={true} />
      </div>
      <Footer />
    </Fragment>
  );
}
