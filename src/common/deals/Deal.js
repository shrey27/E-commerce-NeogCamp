import './deals.css';
import { useCartCtx } from '../../context/cartContext';
import { useWishlistCtx } from '../../context/wishlistContext';
import { useEffect, useState } from 'react';

export default function Deal(props) {
  const {
    id,
    pid,
    source,
    title,
    price,
    discount,
    rating,
    fastdelivery,
    nostock,
    wishlist,
    close
  } = props;
  const { addToCart } = useCartCtx();
  const { addToWishlist, deleteFromWishlist, addedPID } = useWishlistCtx();
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  useEffect(() => {
    if (addedPID && addedPID.includes(pid)) setAddedToWishlist(true);
    else setAddedToWishlist(false);
  }, [addedPID, pid]);

  const handleAddToWishlistClick = () => {
    if (!addedToWishlist) {
      const productToAdd = {
        pid,
        source,
        title,
        price,
        discount,
        rating,
        nostock
      };
      addToWishlist(pid, productToAdd);
      setAddedToWishlist(true);
    }
  };

  return (
    <div className='card ecom shadow'>
      {wishlist && !close && (
        <span className='card__dismiss' onClick={handleAddToWishlistClick}>
          {addedToWishlist ? (
            <i className='fa-solid fa-heart tag--clr'></i>
          ) : (
            <i className='fa-regular fa-heart tertiary'></i>
          )}
        </span>
      )}
      {close && (
        <span
          className='card__dismiss'
          onClick={deleteFromWishlist.bind(this, pid, id)}
        >
          <i
            className='fas fa-times-circle'
            style={{ color: 'var(--tertiary)' }}
          ></i>
        </span>
      )}
      <img
        src={source}
        alt='Banner'
        className={`card__banner ${nostock && 'nostock'}`}
      />
      <section className='deal__content'>
        <h1 className='primary sm sb mg-half'>{title}</h1>
        <div className='price__ctr'>
          <span className='md sb price__val'>₹ {price}</span>
          <span className='tag sm'>
            <i className='fa-solid fa-tags'></i>
            Upto {discount}% Off
          </span>
        </div>
        <div className='price__ctr'>
          <span className='content__rating__span mg-half'>
            {rating}
            <i className='fas fa-star'></i>
          </span>
          {fastdelivery && (
            <span className='delivery sm'>
              <i className='fa-solid fa-truck'></i>Express-Delivery
            </span>
          )}
        </div>

        {nostock ? (
          <button
            className={`btn--disabled btn btn--wide btn--margin`}
            disabled={nostock}
          >
            Out of Stock
          </button>
        ) : (
          <button
            className='btn btn--auth--solid btn--wide btn--margin'
            onClick={addToCart.bind(this, { ...props })}
          >
            Add to Cart
          </button>
        )}
      </section>
    </div>
  );
}
