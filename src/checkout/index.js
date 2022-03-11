import './checkout.css';
import { Fragment } from 'react';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import CheckoutCard from './CheckoutCard';
import { useCheckoutCtx, useCartAPICtx } from '../context/cartContext';

export default function Checkout() {
  const { checkoutState } = useCheckoutCtx();
  const { cartList } = checkoutState;
  const { addNewOrders } = useCartAPICtx();

  const addNewOrdersHandlerFunction = () => {
    if (checkoutState.remainingAmount) {
      const { address, name, email, mobile, cardtype } = checkoutState;
      const cartArray = cartList.map((elem) => {
        const { source, title, price, delivery, discount, count } = elem;
        return {
          status: 'Processing',
          source,
          orderDate: new Date(),
          title,
          price,
          delivery,
          discount,
          address,
          count,
          name,
          email,
          mobile,
          cardtype: cardtype ?? 'UPI'
        };
      });
      const objectToAdd = { ordersList: [...cartArray] };
      addNewOrders(objectToAdd);
    }
  };

  return (
    <Fragment>
      <Navbar />
      <Category />
      <h1 className='lg cen xs-s mg-half'>CHECKOUT DETAILS</h1>
      <hr />
      <hr />
      <div className='final__payment '>
        <button
          className='btn btn--auth--solid btn--wide md sb mg-full'
          onClick={addNewOrdersHandlerFunction}
        >
          Total Payable Amount:&nbsp;&nbsp;₹{checkoutState.remainingAmount}
        </button>
      </div>
      <main className='checkout__container'>
        {cartList.map((elem, index) => {
          return <CheckoutCard {...elem} {...checkoutState} />;
        })}
      </main>
      <div className='final__payment__mobile '>
        <button className='btn btn--auth--solid btn--wide md sb mg-full'>
          Total Payable Amount:&nbsp;&nbsp;₹{checkoutState.remainingAmount}
        </button>
      </div>
      <Footer />
    </Fragment>
  );
}
