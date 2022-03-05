import './summary.css';
import { Fragment } from 'react';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import SummaryCard from './SummaryCard';
const order = [
  {
    status: 'Processing Order',
    title: 'Whey Protein Concentrate',
    date: '28th June, 2022',
    name: 'Shrey Pandey',
    address: '76, Gandhi Nagar, Behind Railway lines, Jaipur, Rajasthan 302006',
    mobile: '9090909090',
    email: 'abc@jkjk.com',
    price: 8000,
    discount: 1000,
    delivery: 500
  },
  {
    status: 'Processing Order',
    title: 'Whey Protein Concentrate',
    date: '28th June, 2022',
    name: 'Shrey Pandey',
    address: '76, Gandhi Nagar, Behind Railway lines, Jaipur, Rajasthan 302006',
    mobile: '9090909090',
    email: 'abc@jkjk.com',
    price: 8000,
    discount: 1000,
    delivery: 500
  }
];
export default function OrderSummary() {
  return (
    <Fragment>
      <Navbar />
      <Category />
      <h1 class='primary lg sb cen mg-full'>ORDER SUMMARY</h1>
      <hr />
      <hr />
      <div class='card--container'>
        {order &&
          order.map((elem, index) => {
            return <SummaryCard key={index * 2} {...elem} />;
          })}
      </div>
      <Footer />
    </Fragment>
  );
}
