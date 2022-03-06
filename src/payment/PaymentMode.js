import { Fragment } from 'react';
import './payment.css';
import PaymentCard from './PaymentCard';
import { usePmtCtx } from '../context/paymentContext';
import PaymentForm from './PaymentForm';
import { cardList, upiList } from '../common/constants';

export default function PaymentMode({ upi }) {
  const { modeId, openModeForm } = usePmtCtx();
  return (
    <>
      {!upi ? (
        <Fragment>
          <h1 class='primary lg cen xs-s mg-full'>SELECT A CARD</h1>
          <div class='flex-ct-ct flex-vertical'>
            {cardList &&
              cardList.map((elem, index) => {
                return <PaymentCard key={index * 3} {...elem} select={true} />;
              })}
            {modeId === 0 ? (
              <PaymentForm />
            ) : (
              <div class='card payment shdw'>
                <div
                  class='flex-ct-sb btn--auth xs-s'
                  onClick={openModeForm.bind(this, 0)}
                >
                  <h1 class='md'>Add New Card</h1>
                  <i class='fas fa-chevron-right fl-rt'></i>
                </div>
              </div>
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1 class='primary lg cen xs-s mg-full'>SELECT A UPI ID</h1>
          <div class='flex-ct-ct flex-vertical'>
            {upiList &&
              upiList.map((elem, index) => {
                return <PaymentCard key={index * 2} {...elem} select={true} />;
              })}

            {modeId === 100 ? (
              <PaymentForm upiId={true} />
            ) : (
              <div class='card payment shdw'>
                <div
                  class='flex-ct-sb btn--auth xs-s'
                  onClick={openModeForm.bind(this, 100)}
                >
                  <h1 class='md'>Add New UPI ID</h1>
                  <i class='fas fa-chevron-right fl-rt'></i>
                </div>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </>
  );
}
