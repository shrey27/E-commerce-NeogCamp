import { Fragment } from 'react';
import './payment.css';
import PaymentCard from './PaymentCard';
import PaymentForm from './PaymentForm';
import { usePmtCtx } from '../context/paymentContext';

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

export default function Payment() {
  const { modeId, openModeForm } = usePmtCtx();
  return (
    <>
      <Fragment>
        <h1 class='primary lg cen xs-s mg-full'>MANAGE YOUR CARDS</h1>
        <div class='flex-ct-ct flex-vertical'>
          {cardList &&
            cardList.map((elem, index) => {
              return <PaymentCard key={index * 2} {...elem} />;
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

      <Fragment>
        <h1 class='primary lg cen xs-s mg-full'>MANAGE YOUR UPI ID's</h1>
        <div class='flex-ct-ct flex-vertical'>
          {upiList &&
            upiList.map((elem, index) => {
              return <PaymentCard key={index * 2} {...elem} />;
            })}
          {modeId === 100 ? (
            <PaymentForm />
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
    </>
  );
}
