import './summary.css';
import { Fragment } from 'react';
import SummaryCard from './SummaryCard';

export default function OrderSummary({ orders }) {
  console.log(orders);
  return (
    <Fragment>
      <div className='mg-full'>
        <h1 className='primary lg sb cen mg-full'>ORDER SUMMARY</h1>
        <hr />
        <hr />
        <div className='card--container'>
          {orders &&
            orders.map((elem, index) => {
              return <SummaryCard key={index * 2} {...elem} />;
            })}
        </div>
      </div>
    </Fragment>
  );
}
