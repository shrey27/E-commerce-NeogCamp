import './deals.css';

export default function Deal(props) {
  const { source, title, price, discount, rating } = props;
  return (
    <div class='card ecom shadow'>
      <img src={source} alt='Banner' class='card__banner' />
      <section class='content'>
        <h1 class='primary sm sb mg-half'>{title}</h1>
        <div class='price__ctr'>
          <h1 class='primary sm sb price__val'>₹ {price}</h1>
          <h1 class='tag sm'>
            <i class='fa-solid fa-tags'></i>
            Upto {discount}% Off
          </h1>
        </div>
        <span class='content__rating mg-half'>
          {rating}
          <i class='fas fa-star'></i>
        </span>
      </section>
    </div>
  );
}
