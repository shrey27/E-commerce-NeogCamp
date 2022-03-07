import { Fragment } from 'react';
import './payment.css';
import PaymentCard from './PaymentCard';
import { useAddrCtx } from '../context/addressContext';
import PaymentForm from './PaymentForm';
import { cardList, upiList } from '../common/constants';

export default function PaymentMode({ upi }) {
  const { formId, openForm } = useAddrCtx();
  return (
    <>
      {!upi ? (
        <Fragment>
          <h1 className='primary lg cen xs-s mg-full'>SELECT A CARD</h1>
          <div className='flex-ct-ct flex-vertical'>
            {cardList &&
              cardList.map((elem, index) => {
                return <PaymentCard key={index * 3} {...elem} select={true} />;
              })}
            {formId === 0 ? (
              <PaymentForm />
            ) : (
              <div className='card payment shdw'>
                <div
                  className='flex-ct-sb btn--auth xs-s'
                  onClick={openForm.bind(this, 0)}
                >
                  <h1 className='md'>Add New Card</h1>
                  <i className='fas fa-chevron-right fl-rt'></i>
                </div>
              </div>
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1 className='primary lg cen xs-s mg-full'>SELECT A UPI ID</h1>
          <div className='flex-ct-ct flex-vertical'>
            {upiList &&
              upiList.map((elem, index) => {
                return <PaymentCard key={index * 2} {...elem} select={true} />;
              })}

            {formId === 100 ? (
              <PaymentForm upiId={true} />
            ) : (
              <div className='card payment shdw'>
                <div
                  className='flex-ct-sb btn--auth xs-s'
                  onClick={openForm.bind(this, 100)}
                >
                  <h1 className='md'>Add New UPI ID</h1>
                  <i className='fas fa-chevron-right fl-rt'></i>
                </div>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </>
  );
}
