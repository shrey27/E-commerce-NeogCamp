import './cart.css';
import { useCartCtx } from '../context/cartContext';

export default function CartItem(props) {
  const { id, source, title, price, mrp, discount, count } = props;
  const { incQty, decQty } = useCartCtx();
  return (
    <div className='cart__landscape shdw'>
      <img src={source} alt='Banner' className='card__banner' />
      <section className='cart__content'>
        <h1 className='cart__align primary lg sb'>{title}</h1>
        <p className='cart__align'>
          <span className='primary sm sb price--pmy'>₹{price}</span>
          <span className='primary--light sm xs-s sb price--sec'>₹{mrp}</span>
          <span className='sm sb price--ter'>{discount}% off</span>
        </p>
        <h1 className='cart__align'>
          {count === 1 ? (
            <i
              className='fa-regular fa-trash-can'
              name='del'
              onClick={decQty.bind(this, id)}
            ></i>
          ) : (
            <i
              className='fas fa-minus btn qty--btn'
              name='dec'
              onClick={decQty.bind(this, id)}
            ></i>
          )}
          <span className='quantity'>{count}</span>
          <i
            className='fas fa-plus btn qty--btn'
            name='inc'
            onClick={incQty.bind(this, id)}
          ></i>
        </h1>
        <div className='btn--shift'>
          <button className='btn btn--auth'>Move to Wishlist</button>
        </div>
      </section>
    </div>
  );
}
