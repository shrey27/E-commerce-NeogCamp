import { useState } from 'react';
import './deals.css';

export default function Deal(props) {
  const { source, title, price, discount, rating, nostock, wishlist, close } =
    props;
  const [added, setAdded] = useState(false);
  return (
    <div class='card ecom shadow'>
      {wishlist && (
        <span class='card__dismiss' onClick={() => setAdded((e) => !e)}>
          {added ? (
            <i class='fa-solid fa-heart tag--clr'></i>
          ) : (
            <i class='fa-regular fa-heart tertiary'></i>
          )}
        </span>
      )}
      {close && (
        <span class='card__dismiss'>
          <i
            class='fas fa-times-circle'
            style={{ color: 'var(--tertiary)' }}
          ></i>
        </span>
      )}
      <img
        src={source}
        alt='Banner'
        class={`card__banner ${nostock && 'nostock'}`}
      />
      <section class='content'>
        <h1 class='primary sm sb mg-half'>{title}</h1>
        <div class='price__ctr'>
          <span class='primary sm sb price__val'>₹ {price}</span>
          <span class='tag sm'>
            <i class='fa-solid fa-tags'></i>
            Upto {discount}% Off
          </span>
        </div>
        <span class='content__rating mg-half'>
          {rating}
          <i class='fas fa-star'></i>
        </span>
      </section>
      <button class='btn btn--wide cart__btn' disabled={nostock}>
        {nostock ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
}
