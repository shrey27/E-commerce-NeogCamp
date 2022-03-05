import './cart.css';

export default function CartItem(props) {
  const { source, title, price, mrp, discount, quantity } = props;
  return (
    <div class='cart__landscape shdw'>
      <img src={source} alt='Banner' class='card__banner' />
      <section class='cart__content sm-s'>
        <h1 class='cart__align primary sm sb'>{title}</h1>
        <p class='cart__align'>
          <span class='primary sm sb price--pmy'>₹{price}</span>
          <span class='primary--light sm xs-s sb price--sec'>₹{mrp}</span>
          <span class='sm sb price--ter'>{discount}% off</span>
        </p>
        <h1 class='cart__align'>
          {quantity === 1 ? (
            <i class='fa-regular fa-trash-can btn qty--btn'></i>
          ) : (
            <i class='fas fa-minus btn qty--btn'></i>
          )}
          <span class='quantity'>{quantity}</span>
          <i class='fas fa-plus btn qty--btn'></i>
        </h1>
        <div class='btn--shift'>
          <button class='btn btn--auth'>Move to Wishlist</button>
        </div>
      </section>
    </div>
  );
}
