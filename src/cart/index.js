import './cart.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import CartItem from './CartItem';

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
  }
];

export default function Cart() {
  return (
    <>
      <Navbar />
      <Category />
      <div class='cart sm-s'>
        <div class='card--container'>
          {cartList &&
            cartList.map((elem, index) => {
              return <CartItem key={index * 2} {...elem} />;
            })}
        </div>
        <div class='cart--box shdw md-s'>
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
      <Footer />
    </>
  );
}
