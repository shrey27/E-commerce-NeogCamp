import { Fragment } from 'react';
import './address.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import Address from './';
import { AddressProvider } from '../address/addressContext';

export default function AddressSelection() {
  return (
    <Fragment>
      <Navbar />
      <Category />
      <AddressProvider>
        <Address select={true} />
      </AddressProvider>
      <Footer />
    </Fragment>
  );
}
