import { Fragment } from 'react';
import './payment.css';
import PaymentCard from './PaymentCard';
import { PaymentProvider } from './paymentContext';
import { usePmtCtx } from './paymentContext';
import PaymentForm from './PaymentForm';

const cardList = [
  {
    id: 1,
    bank: 'adc pvt ltd.',
    name: 'abc',
    number: '123412341234',
    month: '08',
    year: '22',
    type: 'debit'
  },
  {
    id: 2,
    bank: 'adc pvt ltd.',
    name: 'xyz',
    number: '432143214321',
    month: '09',
    year: '25',
    type: 'credit'
  }
];
const upiList = [
  { id: 3, upiId: 'abc@okcdc' },
  { id: 4, upiId: 'xyz@okdfd' }
];

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
