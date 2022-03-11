import './checkout.css';
import { Fragment } from 'react';

export default function CheckoutCard(props) {
  const {
    name,
    address,
    mobile,
    email,
    cardtype,
    number,
    month,
    year,
    source,
    upiId,
    title,
    productTotal,
    discountOnProduct,
    count,
    delivery
  } = props;
  console.log(props, cardtype ?? upiId);
  return (
    <Fragment>
      <div className='card card__summary landscape shdw xs-s'>
        <img src={source} alt='Banner' className='summary card__banner' />
        <section className='card__status xs-s'>
          <h1 className='tertiary lg sb cen mg-half'>{title}</h1>
          <h1 className='primary md sb mg-half cen'>Quantity: {count}</h1>
          <h1 className='card__status__mode sm cen mg-half xs-s'>
            Mode of Payment: {upiId ? 'UPI ID' : cardtype ? cardtype : 'CASH'}
          </h1>

          {upiId ? (
            <div>
              <p className='mg-half'>
                <span className='sm sb'>UPI ID:</span>
                <span className='sm sb fl-rt'>{upiId}</span>
              </p>
            </div>
          ) : (
            <div>
              {cardtype && (
                <div className='align'>
                  <p className='mg-half'>
                    <span className='sm sb'>CARD NUMBER:&nbsp;</span>
                    <span className='tertiary sm sb'>{number}</span>
                  </p>
                  <p className='mg-half'>
                    <span className='sm sb'>EXPIRY:&nbsp;</span>
                    <span className='tertiary sm sb'>
                      {month} {year}
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className='card__address sm-s'>
          <h1 className='price lg sb cen'>Delivery Address</h1>
          <h1 className='primary md mg-half'>
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
              <span className='sm sb fl-rt'>₹{productTotal}</span>
            </p>
            <p className='mg-half'>
              <span className='sm sb'>Discount</span>
              <span className='sm sb fl-rt'>₹{discountOnProduct}</span>
            </p>
            <p className='mg-half'>
              <span className='sm sb'>Delivery</span>
              <span className='sm sb fl-rt'>₹{delivery}</span>
            </p>
            <p className='mg-half'>
              <span className='tag md sb'>Total</span>
              <span className='tag md sb fl-rt'>
                ₹{productTotal - discountOnProduct + delivery}
              </span>
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
