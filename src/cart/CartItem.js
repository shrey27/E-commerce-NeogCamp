import './cart.css';
import { useCartCtx } from '../context/cartContext';

export default function CartItem(props) {
  const { id, source, title, price, mrp, discount, count } = props;
  const { incQty, decQty } = useCartCtx();
  return (
    <div class='cart__landscape shdw'>
      <img src={source} alt='Banner' class='card__banner' />
      <section class='cart__content'>
        <h1 class='cart__align primary lg sb'>{title}</h1>
        <p class='cart__align'>
          <span class='primary sm sb price--pmy'>₹{price}</span>
          <span class='primary--light sm xs-s sb price--sec'>₹{mrp}</span>
          <span class='sm sb price--ter'>{discount}% off</span>
        </p>
        <h1 class='cart__align'>
          {count === 1 ? (
            <i
              class='fa-regular fa-trash-can btn qty--btn'
              name='del'
              onClick={decQty.bind(this, id)}
            ></i>
          ) : (
            <i
              class='fas fa-minus btn qty--btn'
              name='dec'
              onClick={decQty.bind(this, id)}
            ></i>
          )}
          <span class='quantity'>{count}</span>
          <i
            class='fas fa-plus btn qty--btn'
            name='inc'
            onClick={incQty.bind(this, id)}
          ></i>
        </h1>
        <div class='btn--shift'>
          <button class='btn btn--auth'>Move to Wishlist</button>
        </div>
      </section>
    </div>
  );
}
