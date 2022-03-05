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
      <Address select={true} redirect={true} />
      <Footer />
    </Fragment>
  );
}
