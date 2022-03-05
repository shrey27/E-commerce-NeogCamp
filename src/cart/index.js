import './cart.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import CartItem from './CartItem';
import { useCartCtx } from '../context/cartContext';
import { useEffect, useState } from 'react';

// const cartList = [
//   {
//     source: 'https://m.media-amazon.com/images/I/413GuC4J4FL.jpg',
//     title: 'Whey Protein Concentrate',
//     price: 8000,
//     mrp: 18000,
//     discount: 30,
//     quantity: 1
//   },
//   {
//     source: 'https://m.media-amazon.com/images/I/413GuC4J4FL.jpg',
//     title: 'Whey Protein Concentrate',
//     price: 8000,
//     mrp: 18000,
//     discount: 30,
//     quantity: 1
//   }
// ];

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
      {items ? (
        <img src='empty.webp' alt='empty' class='image__empty img--md'/>
      ) : (
        <div class='cart sm-s'>
          <div class='cart__container'>
            {items &&
              items.map((elem, index) => {
                return <CartItem key={index * 2} {...elem} />;
              })}
          </div>
          <div class='cart__box shdw md-s'>
            <h1 class='md sb'>CART ITEMS</h1>
            <hr />
            <p class='mg-half'>
              <span class='sm sb'>Price</span>
              <span class='sm sb fl-rt'>₹{cartPrice.total}</span>
            </p>
            <p class='mg-half'>
              <span class='sm sb'>Discount</span>
              <span class='sm sb fl-rt'>₹{cartPrice.discount}</span>
            </p>
            <p class='mg-half'>
              <span class='sm sb'>Delivery</span>
              <span class='sm sb fl-rt'>₹{cartPrice.delivery}</span>
            </p>
            <hr />
            <p class='mg-half'>
              <span class='sm sb'>TOTAL</span>
              <span class='sm sb fl-rt'>₹{cartPrice.net}</span>
            </p>
            <hr />
            <button class='btn btn--wide btn--dark mg-half bd'>
              Place Order
            </button>
          </div>
        </div>
      )}
      <Footer fixed={items}/>
    </>
  );
}
