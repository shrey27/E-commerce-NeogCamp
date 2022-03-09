import './wishlist.css';

export default function WishlistCard(props) {
  const { source, title, price, discount, rating } = props;
  
  return (
    <div className='card ecom'>
      <span className='card__dismiss'>
        <i className='fas fa-times-circle'></i>
      </span>
      <img src={source} alt='Banner' className='card__banner' />
      <section className='content xs-s'>
        <h1 className='primary sm sb mg-half'>{title}</h1>
        <div className='price__ctr md'>
          <h1 className='primary md sb price__val'>₹{price}</h1>
          <h1 className='tag sm'>
            <i className='fa-solid fa-tags'></i>Upto {discount}% Off
          </h1>
        </div>
        <span className='content__rating mg-half'>
          {rating}
          <i className='fas fa-star'></i>
        </span>
      </section>
      <button className='btn btn--wide cart__btn'>Move to Cart</button>
    </div>
  );
}
