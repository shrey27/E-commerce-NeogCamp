import './summary.css';
import { Fragment, useEffect, useState } from 'react';
import Modal from '../common/modal';
import { useCartAPICtx } from '../context/cartContext';

export default function SummaryCard(props) {
  const {
    id,
    index,
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
    count,
    discount
  } = props;

  const [eligibleForReturn, setEligibleForReturn] = useState(false);
  const [dateOfOrder, setDateOfOrder] = useState({
    date: 0,
    month: 0,
    year: 0
  });
  const [etaDate, setEtaDate] = useState({ date: 0, month: 0, year: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const { updateAnOrder } = useCartAPICtx();

  useEffect(() => {
    const dateOfOrder = new Date(orderDate.seconds * 1000);
    const date1 = new Date();
    const date2 = new Date(eta.seconds * 1000);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffTime + ' milliseconds');
    // console.log(diffDays + ' days');
    if (diffDays < 7 && status !== 'Cancelled') setEligibleForReturn(true);
    setDateOfOrder({
      date: dateOfOrder.getDate(),
      month: dateOfOrder.getMonth() + 1,
      year: dateOfOrder.getFullYear()
    });
    setEtaDate({
      date: date2.getDate(),
      month: date2.getMonth() + 1,
      year: date2.getFullYear()
    });
  }, [orderDate, eta, status]);

  const returnOrderhandler = () => {
    updateAnOrder(id, index);
  };

  return (
    <Fragment>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        returnFlag={status !== 'Delivered'}
        returnOrderhandler={returnOrderhandler}
      />
      <div className='card card__summary landscape shdw xs-s'>
        <img src={source} alt='Banner' className='summary card__banner' />
        <section className='card__status xs-s'>
          {status === 'Cancelled' ? (
            <h1 className='card__status__margin tag md sb cen'>ORDER CANCELLED</h1>
          ) : (
            <h1 className='card__status__margin text--decoration price md sb cen'>{`STATUS: ${status.toUpperCase()}`}</h1>
          )}

          <h1 className='card__status__margin primary md sb cen'>{title}</h1>
          <h1 className='card__status__margin md sb primary cen'>
            Order placed on:{' '}
            {`${
              dateOfOrder.date < 10 ? '0' + dateOfOrder.date : dateOfOrder.date
            }-${
              dateOfOrder.month < 10
                ? '0' + dateOfOrder.month
                : dateOfOrder.month
            }-${dateOfOrder.year}`}
          </h1>
          <h1 className='card__status__margin md sb cen'>Quantity: {count}</h1>
          <h1 className='card__status__margin md sb primary cen'>
            OrderId: {2922}
          </h1>
          {status !== 'Cancelled' && (
            <h1 className='card__status__margin md sb price cen'>
              {status !== 'Delivered' ? 'ETA' : 'Date of Delivery'}:{' '}
              {`${etaDate.date < 10 ? '0' + etaDate.date : etaDate.date}-${
                etaDate.month < 10 ? '0' + etaDate.month : etaDate.month
              }-${etaDate.year}`}
            </h1>
          )}
          <h1 className='tag sm cen mg-half'>
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
          <h1 className='text--decoration price md sb cen'>Delivery Address</h1>
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
          <h1 className='text--decoration price cen md sb'>Payment Summary</h1>
          <div className='align'>
            <p className='mg-half'>
              <span className='sm sb'>Price</span>
              <span className='sm sb fl-rt'>₹{price * count}</span>
            </p>
            <p className='mg-half'>
              <span className='sm sb'>Discount</span>
              <span className='sm sb fl-rt'>
                ₹{price * count * (discount / 100)}
              </span>
            </p>
            <p className='mg-half'>
              <span className='sm sb'>Delivery</span>
              <span className='sm sb fl-rt'>
                ₹{price * count < 10000 ? 500 : 0}
              </span>
            </p>

            <p className='mg-half'>
              <span className='md sb'>TOTAL</span>
              <span className='md sb fl-rt'>
                ₹{price * count * (1 - discount / 100)}
              </span>
            </p>
          </div>
          <div className='flex-ct-ct'>
            {eligibleForReturn ? (
              <button
                className='btn btn--dark btn--wide sb'
                onClick={() => setModalOpen(true)}
              >
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
