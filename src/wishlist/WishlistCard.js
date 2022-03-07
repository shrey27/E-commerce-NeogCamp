export default function WishlistCard(props) {
    const {source, title, price, discount, rating}
  return (
    <div className='card ecom'>
      <span className='card__dismiss'>
        <i className='fas fa-times-circle'></i>
      </span>
      <img
        src='https://static.thcdn.com/images/xsmall/webp//productimg/original/12949455-1834924183341159.jpg'
        alt='Banner'
        className='card__banner'
      />
      <section className='content xs-s'>
        <h1 className='primary sm sb mg-half'>Vegan Double Dough Brownie</h1>
        <div className='price__ctr md'>
          <h1 className='primary md sb price__val'>₹8,000</h1>
          <h1 className='tag sm'>
            <i className='fa-solid fa-tags'></i>Upto 30% Off
          </h1>
        </div>
        <span className='content__rating mg-half'>
          4.2<i className='fas fa-star'></i>
        </span>
      </section>
      <button className='btn btn--wide cart__btn'>Move to Cart</button>
    </div>
  );
}
