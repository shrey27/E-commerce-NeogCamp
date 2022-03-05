import { Fragment } from 'react';
import './payment.css';
import PaymentCard from './PaymentCard';

const cardList = [
  {
    bank: 'adc pvt ltd.',
    name: 'abc',
    number: '123412341234',
    month: '08',
    year: '22',
    type: 'debit'
  },
  {
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
  return (
    <>
      {!upi ? (
        <Fragment>
          <h1 class='primary lg cen xs-s mg-full'>SELECT A CARD</h1>
          <div class='flex-ct-ct flex-vertical'>
            {cardList &&
              cardList.map((elem, index) => {
                return (
                  <PaymentCard
                    key={index * 2}
                    {...elem}
                    select={true}
                    redirect={true}
                  />
                );
              })}
            <div class='card payment shdw'>
              <div class='flex-ct-sb btn--auth xs-s'>
                <h1 class='md'>Add New Card</h1>
                <i class='fas fa-chevron-right fl-rt'></i>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1 class='primary lg cen xs-s mg-full'>SELECT A UPI ID</h1>
          <div class='flex-ct-ct flex-vertical'>
            {upiList &&
              upiList.map((elem, index) => {
                return (
                  <PaymentCard
                    key={index * 2}
                    {...elem}
                    select={true}
                    redirect={true}
                  />
                );
              })}
            <div class='card payment shdw'>
              <div class='flex-ct-sb btn--auth xs-s'>
                <h1 class='md'>Add New UPI ID</h1>
                <i class='fas fa-chevron-right fl-rt'></i>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
}
