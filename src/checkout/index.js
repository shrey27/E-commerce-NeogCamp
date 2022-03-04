import './checkout.css';
import { Fragment } from 'react';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import AddressCard from '../address/AddressCard';
import PaymentCard from '../payment/PaymentCard';
import CartItem from '../cart/CartItem';
const address = {
  name: 'Shrey Pandey',
  email: 'abc@xyz.com',
  mobile: 9090909090,
  type: 'HOME',
  line_1: '76',
  line_2: 'lorem ipsum',
  landmark: 'lorem ipsum',
  city: 'lorem ipsum',
  state: 'lorem ipsum',
  pincode: 122112
};
const cartList = [
  {
    source: 'https://m.media-amazon.com/images/I/413GuC4J4FL.jpg',
    title: 'Whey Protein Concentrate',
    price: 8000,
    mrp: 18000,
    discount: 30,
    quantity: 1
  },
  {
    source: 'https://m.media-amazon.com/images/I/413GuC4J4FL.jpg',
    title: 'Whey Protein Concentrate',
    price: 8000,
    mrp: 18000,
    discount: 30,
    quantity: 1
  },
  {
    source: 'https://m.media-amazon.com/images/I/413GuC4J4FL.jpg',
    title: 'Whey Protein Concentrate',
    price: 8000,
    mrp: 18000,
    discount: 30,
    quantity: 1
  }
];
const card = {
  bank: 'adc pvt ltd.',
  name: 'abc',
  number: '123412341234',
  month: '08',
  year: '22',
  type: 'debit'
};

export default function Checkout(props) {
  const { paymentType='UPI' } = props;
  return (
    <Fragment>
      <Navbar />
      <Category />
      <h1 class='lg cen xs-s mg-half'>CHECKOUT DETAILS</h1>
      <main class='checkout__container'>
        <div class='checkout__address'>
          <AddressCard {...address} title='Delivery Address' noEdit={true} />
          {paymentType === 'CARD' && <PaymentCard {...card} noEdit={true} />}
          {paymentType === 'UPI' && (
            <PaymentCard {...card} upiId='abc@okcdc' noEdit={true} />
          )}
          {paymentType === 'CASH' && (
            <div class='card payment shdw'>
              <div class='flex-ct-sb btn--auth xs-s'>
                <h1 class='lg sb'>Mode of Payment: CASH</h1>
              </div>
            </div>
          )}
        </div>
        <div class='checkout__cart'>
          {cartList &&
            cartList.map((elem, index) => {
              return <CartItem key={index * 2} {...elem} />;
            })}

          <div class='checkout__total__card shdw md-s'>
            <h1 class='md sb'>CART ITEMS</h1>
            <hr />
            <p class='mg-half'>
              <span class='sm sb'>Price</span>
              <span class='sm sb fl-rt'>₹3000</span>
            </p>
            <p class='mg-half'>
              <span class='sm sb'>Discount</span>
              <span class='sm sb fl-rt'>₹1000</span>
            </p>
            <p class='mg-half'>
              <span class='sm sb'>Delivery</span>
              <span class='sm sb fl-rt'>₹500</span>
            </p>
            <hr />
            <p class='mg-half'>
              <span class='sm sb'>TOTAL</span>
              <span class='sm sb fl-rt'>₹2500</span>
            </p>
            <hr />
            <button class='btn btn--wide btn--dark mg-half bd'>
              Place Order
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
