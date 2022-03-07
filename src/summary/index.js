import './summary.css';
import { Fragment } from 'react';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import SummaryCard from './SummaryCard';
import { orders } from '../common/constants';

export default function OrderSummary() {
  return (
    <Fragment>
      <Navbar />
      <Category />
      <h1 className='primary lg sb cen mg-full'>ORDER SUMMARY</h1>
      <hr />
      <hr />
      <div className='card--container'>
        {orders &&
          orders.map((elem, index) => {
            return <SummaryCard key={index * 2} {...elem} />;
          })}
      </div>
      <Footer />
    </Fragment>
  );
}
