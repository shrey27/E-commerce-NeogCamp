import './summary.css';
import { Fragment, useEffect, useState } from 'react';

export default function SummaryCard(props) {
  const {
    status,
    source,
    title,
    orderDate,
    eta,
    name,
    address,
    mobile,
    email,
    cardtype = 'CASH',
    price,
    discount,
    delivery
  } = props;
  const [eligibleForReturn, setEligibleForReturn] = useState(false);
  const [dateOfOrder, setDateOfOrder] = useState({
    date: 0,
    month: 0,
    year: 0
  });
  const [etaDate, setEtaDate] = useState({ date: 0, month: 0, year: 0 });

  useEffect(() => {
    // const date1 = new Date(
    //   orderDate.seconds * 1000 + orderDate.nanoseconds * 1000
    // );
    // const date2 = new Date(eta.seconds * 1000 + eta.nanoseconds * 1000);

    // // const diffDays = Math.ceil(Math.abs(diffSeconds) / (60 * 60 * 24));
    // if (date1.getDate() - date2.getDate() < 0 || date1.getDate() - date2.getDate() < 7)
    //   setEligibleForReturn(true);

    // setDateOfOrder({
    //   date: date1.getDate(),
    //   month: date1.getMonth() + 1,
    //   year: date1.getFullYear()
    // });
    // setEtaDate({
    //   date: date2.getDate(),
    //   month: date2.getMonth() + 1,
    //   year: date2.getFullYear()
    // });
  }, [orderDate, eta]);

  return (
    <Fragment>
      <div className='card card__summary landscape shdw xs-s'>
        <img src={source} alt='Banner' className='summary card__banner' />
        <section className='card__status xs-s'>
          <h1 className='price--ter lg sb cen'>{`Status: ${status}`}</h1>
          <h1 className='primary md sb mg-half cen'>{title}</h1>
          <h1 className='md sb primary mg-half cen'>
            Order placed on:{' '}
            {`${
              dateOfOrder.date < 10 ? '0' + dateOfOrder.date : dateOfOrder.date
            }-${
              dateOfOrder.month < 10
                ? '0' + dateOfOrder.month
                : dateOfOrder.month
            }-${dateOfOrder.year}`}
          </h1>
          <h1 className='md sb primary mg-half cen'>OrderId: {2922}</h1>
          <h1 className='md sb price--ter mg-half cen'>
            {status !== 'Delivered' ? 'ETA' : 'Date of Delivery'}:{' '}
            {`${etaDate.date < 10 ? '0' + etaDate.date : etaDate.date}-${
              etaDate.month < 10 ? '0' + etaDate.month : etaDate.month
            }-${etaDate.year}`}
          </h1>
          <h1 className='tag sm cen'>
            {eligibleForReturn ? (
              <>
                <i class='fa-solid fa-arrow-rotate-left'></i>'7 days Return
                Policy'
              </>
            ) : (
              'Not Eligible for return'
            )}
          </h1>
        </section>

        <section className='card__address sm-s'>
          <h1 className='price--ter md sb cen'>Delivery Address</h1>
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

          <h1 className='card__status__mode sm cen mg-half xs-s'>
            Mode of Payment: {cardtype}
          </h1>
        </section>

        <section className='card__payment'>
          <h1 className='price--ter cen md sb'>Payment Summary</h1>
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
              <span className='md sb'>TOTAL</span>
              <span className='md sb fl-rt'>₹2500</span>
            </p>
          </div>
          <div className='flex-ct-ct'>
            {eligibleForReturn ? (
              <button className='btn btn--dark btn--wide sb'>
                {status !== 'Delivered' ? 'CANCEL ORDER' : 'RETURN ITEM'}
              </button>
            ) : (
              <button className='btn btn--icons btn--wide sb'>
                Shop Again
              </button>
            )}
          </div>
        </section>
      </div>
    </Fragment>
  );
}
