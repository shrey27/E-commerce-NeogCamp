import { Fragment, useState } from 'react';
import './payment.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import PaymentMode from './PaymentMode';

export default function PaymentSelection() {
  const [method, setMethod] = useState('');
  const methodHandler = (name) => {
    setMethod(name);
  };
  return (
    <Fragment>
      <Navbar />
      <Category />
      {!method ? (
        <div>
          <h1 class='primary lg sb xs-s cen mg-half'>
            SELECT A PAYMENT OPTION
          </h1>
          <div class='card payment shdw'>
            <div class='sm-s mg-half'>
              <ul class='stack'>
                <li
                  class='stack__payment__item flex-ct-sb shadow xs-s mg-full'
                  name='CARD'
                  onClick={methodHandler.bind(this, 'CARD')}
                >
                  <div class='flex-ct-st'>
                    <img
                      src='card.png'
                      alt='Avatar'
                      class='avatar avatar--sm sq'
                    />
                    <h1 class='primary sm sb'>Debit Card/ Credit Card</h1>
                  </div>
                  <i class='fas fa-chevron-right fl-rt'></i>
                </li>

                <li
                  class='stack__payment__item flex-ct-sb shadow xs-s mg-full'
                  name='upi'
                  onClick={methodHandler.bind(this, 'UPI')}
                >
                  <div class='flex-ct-st'>
                    <img
                      src='upi.png'
                      alt='Avatar'
                      class='avatar avatar--sm sq'
                    />
                    <h1 class='primary sm sb'>UPI</h1>
                  </div>
                  <i class='fas fa-chevron-right fl-rt'></i>
                </li>

                <li class='stack__payment__item flex-ct-sb shadow xs-s mg-full'>
                  <div class='flex-ct-st'>
                    <img
                      src='cash.png'
                      alt='Avatar'
                      class='avatar avatar--sm sq'
                    />
                    <h1 class='primary sm sb'>Cash on Delivery</h1>
                  </div>
                  <i class='fas fa-chevron-right fl-rt'></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 class='pageheader shadow' onClick={methodHandler.bind(this, '')}>
            <i class='fa-solid fa-chevron-left'></i>Change Mode of Payment
          </h1>
          {method === 'UPI' ? (
            <PaymentMode select={true} upi={true} />
          ) : (
            <PaymentMode select={true} upi={false} />
          )}
        </div>
      )}
      <Footer fixed={true} />
    </Fragment>
  );
}
