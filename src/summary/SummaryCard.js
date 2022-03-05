import './summary.css';
import { Fragment } from 'react';

export default function OrderSummary(props) {
  const {
    status = 'Processing Order',
    title = 'Whey Protein Concentrate',
    date = '28th June, 2022',
    name = 'Shrey Pandey',
    address = '76, Gandhi Nagar, Behind Railway lines, Jaipur, Rajasthan 302006',
    mobile = '9090909090',
    email = 'abc@jkjk.com',
    price = 8000,
    discount = 1000,
    delivery = 500
  } = props;
  return (
    <Fragment>
      <div class='card card__summary landscape shdw xs-s'>
        <img
          src='https://m.media-amazon.com/images/I/413GuC4J4FL.jpg'
          alt='Banner'
          class='card__banner'
        />
        <section class='card__status xs-s border--bottom'>
          <h1 class='price--ter md sb cen'>Status: {status}</h1>
          <h1 class='primary md sb mg-half cen'>{title}</h1>
          <h1 class='sm sb price--ter mg-half cen'>ETA: {date}</h1>
          <div class='flex-ct-ct'>
            <button class='btn btn--icons sb'>Shop Again</button>
          </div>
        </section>

        <section class='card__address sm-s'>
          <h1 class='price--ter md sb cen'>Delivery Address</h1>
          <h1 class='primary sm mg-half cen'>{name}</h1>
          <h1 class='primary sm sb cen'>{address}</h1>

          <h1 class='primary sm sb mg-half cen'>{mobile}</h1>
          <h1 class='primary sm sb cen'>{email}</h1>
        </section>

        <section class='card__payment xs-s border--bottom'>
          <h1 class='price--ter cen md sb'>Payment Summary</h1>
          <div class='align'>
            <p class='mg-half'>
              <span class='sm sb'>Price</span>
              <span class='sm sb fl-rt'>₹{price}</span>
            </p>
            <p class='mg-half'>
              <span class='sm sb'>Discount</span>
              <span class='sm sb fl-rt'>₹{discount}</span>
            </p>
            <p class='mg-half'>
              <span class='sm sb'>Delivery</span>
              <span class='sm sb fl-rt'>₹{delivery}</span>
            </p>

            <p class='mg-half'>
              <span class='md sb'>TOTAL</span>
              <span class='md sb fl-rt'>₹2500</span>
            </p>
          </div>
          <div class='flex-ct-ct'>
            <button class='btn btn--dark btn--wide sb'>CANCEL ORDER</button>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
