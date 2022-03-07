import './cart.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import CartItem from './CartItem';
import { useCartCtx } from '../context/cartContext';
import { useEffect, useState } from 'react';

export default function Cart() {
  const { items } = useCartCtx();
  const [cartPrice, setCartPrice] = useState({
    total: 0,
    discount: 0,
    net: 0,
    delivery: 0
  });

  useEffect(() => {
    const calculateTotal = () => {
      const total = items.reduce((acc, curr) => {
        return acc + curr.price * curr.count;
      }, 0);
      const discount = items.reduce((acc, curr) => {
        return acc + (curr.count * curr.price * curr.discount) / 100;
      }, 0);
      const delivery = total - discount > 499 ? 500 : 0;
      const net = total - discount + delivery;
      return { total, discount, net, delivery };
    };
    const cartPriceObject = calculateTotal();

    console.log(cartPriceObject);

    setCartPrice(cartPriceObject);
  }, [items]);

  return (
    <>
      <Navbar />
      <Category />
      {items.length === 0 ? (
        <img src='empty.webp' alt='empty' className='image__empty img--md' />
      ) : (
        <div className='cart sm-s'>
          <div className='cart__container'>
            {items &&
              items.map((elem, index) => {
                return <CartItem key={index * 2} {...elem} />;
              })}
          </div>
          <div className='cart__box shdw md-s'>
            <h1 className='md sb'>CART ITEMS</h1>
            <hr />
            <p className='mg-half'>
              <span className='sm sb'>Price</span>
              <span className='sm sb fl-rt'>₹{cartPrice.total}</span>
            </p>
            <p className='mg-half'>
              <span className='sm sb'>Discount</span>
              <span className='sm sb fl-rt'>₹{cartPrice.discount}</span>
            </p>
            <p className='mg-half'>
              <span className='sm sb'>Delivery</span>
              <span className='sm sb fl-rt'>₹{cartPrice.delivery}</span>
            </p>
            <hr />
            <p className='mg-half'>
              <span className='sm sb'>TOTAL</span>
              <span className='sm sb fl-rt'>₹{cartPrice.net}</span>
            </p>
            <hr />
            <button className='btn btn--wide btn--dark mg-half bd'>
              Place Order
            </button>
          </div>
        </div>
      )}
      <Footer fixed={items} />
    </>
  );
}
