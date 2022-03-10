import './checkout.css';
import { Fragment } from 'react';

export default function CheckoutCard(props) {
  const {
    name,
    address,
    mobile,
    email,
    cardtype,
    source,
    title,
    remainingAmount,
    count,
    price,
    discount,
    delivery = 500
  } = props;

  return (
    <Fragment>
      <div className='card card__summary landscape shdw xs-s'>
        <img src={source} alt='Banner' className='summary card__banner' />
        <section className='card__status xs-s'>
          <h1 className='tertiary lg sb cen mg-half'>{title}</h1>
          <h1 className='primary md sb mg-half cen'>Quantity: {count}</h1>
          <h1 className='card__status__mode sm cen mg-half xs-s'>
            Mode of Payment: {cardtype}
          </h1>
        </section>

        <section className='card__address sm-s'>
          <h1 className='price lg sb cen'>Delivery Address</h1>
          <h1 className='primary sm mg-half'>
            <i class='fa-solid fa-user'></i>
            {name}
          </h1>

          <div className='address__summary'>
            <span className='primary sm sb'>
              <i class='fa-solid fa-location-dot'></i>
            </span>
            <span className='primary sm sb add__align'>
              <span>{address}</span>
            </span>
          </div>

          <h1 className='primary sm sb mg-half'>
            <i class='fa-solid fa-mobile-screen-button'></i>
            {mobile}
          </h1>
          <h1 className='primary sm sb'>
            <i class='fa-solid fa-envelope'></i>
            {email}
          </h1>
        </section>

        <section className='card__payment'>
          <h1 className='price cen lg sb'>Payment Summary</h1>
          <div className='align'>
            <p className='mg-half'>
              <span className='sm sb'>Price</span>
              <span className='sm sb fl-rt'>₹{price}</span>
            </p>
            <p className='mg-half'>
              <span className='sm sb'>Discount</span>
              <span className='sm sb fl-rt'>₹{discount}</span>
            </p>
            <p className='mg-half'>
              <span className='sm sb'>Delivery</span>
              <span className='sm sb fl-rt'>₹{delivery}</span>
            </p>

            <p className='mg-half'>
              <span className='tag md sb'>Total</span>
              <span className='tag md sb fl-rt'>₹2500</span>
            </p>
          </div>
          <div className='flex-ct-ct'>
            <button className='btn btn--dark btn--wide sb'>PLACE ORDER</button>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
