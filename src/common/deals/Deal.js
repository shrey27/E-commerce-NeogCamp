import './deals.css';

export default function Deal(props) {
  const { source, title, price, discount, rating } = props;
  return (
    <div class='card ecom shadow'>
      <img src={source} alt='Banner' class='card__banner' />
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
    </div>
  );
}
