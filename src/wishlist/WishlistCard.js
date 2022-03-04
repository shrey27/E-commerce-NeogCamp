export default function WishlistCard(props) {
    const {source, title, price, discount, rating}
  return (
    <div class='card ecom'>
      <span class='card__dismiss'>
        <i class='fas fa-times-circle'></i>
      </span>
      <img
        src='https://static.thcdn.com/images/xsmall/webp//productimg/original/12949455-1834924183341159.jpg'
        alt='Banner'
        class='card__banner'
      />
      <section class='content xs-s'>
        <h1 class='primary sm sb mg-half'>Vegan Double Dough Brownie</h1>
        <div class='price__ctr md'>
          <h1 class='primary md sb price__val'>₹8,000</h1>
          <h1 class='tag sm'>
            <i class='fa-solid fa-tags'></i>Upto 30% Off
          </h1>
        </div>
        <span class='content__rating mg-half'>
          4.2<i class='fas fa-star'></i>
        </span>
      </section>
      <button class='btn btn--wide cart__btn'>Move to Cart</button>
    </div>
  );
}
