import { Fragment, useState } from 'react';
import './payment.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import PaymentMode from './PaymentMode';

export default function PaymentSelection() {
  const [method, setMethod] = useState(null);
  const methodHandler = (name) => {
    setMethod(name);
  };
  return (
    <Fragment>
      <Navbar />
      <Category />
      {!method ? (
        <div>
          <h1 className='primary lg sb xs-s cen mg-half'>
            SELECT A PAYMENT OPTION
          </h1>
          <div className='card payment__select shdw'>
            <div className='sm-s mg-half'>
              <ul className='stack'>
                <li
                  className='stack__payment__item flex-ct-sb shadow xs-s mg-full'
                  name='CARD'
                  onClick={methodHandler.bind(this, 'CARD')}
                >
                  <div className='flex-ct-st'>
                    <img
                      src='card.png'
                      alt='Avatar'
                      className='avatar avatar--sm sq'
                    />
                    <h1 className='primary sm sb'>Debit Card/ Credit Card</h1>
                  </div>
                  <i className='fas fa-chevron-right fl-rt'></i>
                </li>

                <li
                  className='stack__payment__item flex-ct-sb shadow xs-s mg-full'
                  name='upi'
                  onClick={methodHandler.bind(this, 'UPI')}
                >
                  <div className='flex-ct-st'>
                    <img
                      src='upi.png'
                      alt='Avatar'
                      className='avatar avatar--sm sq'
                    />
                    <h1 className='primary sm sb'>UPI</h1>
                  </div>
                  <i className='fas fa-chevron-right fl-rt'></i>
                </li>

                <li className='stack__payment__item flex-ct-sb shadow xs-s mg-full'>
                  <div className='flex-ct-st'>
                    <img
                      src='cash.png'
                      alt='Avatar'
                      className='avatar avatar--sm sq'
                    />
                    <h1 className='primary sm sb'>Cash on Delivery</h1>
                  </div>
                  <i className='fas fa-chevron-right fl-rt'></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1
            className='pageheader shadow'
            onClick={methodHandler.bind(this, '')}
          >
            <i className='fa-solid fa-chevron-left'></i>Change Mode of Payment
          </h1>
          <PaymentMode upi={method === 'UPI'} />
        </div>
      )}
      <Footer />
    </Fragment>
  );
}
