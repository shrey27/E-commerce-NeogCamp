import './summary.css';
import { Fragment, useState } from 'react';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import OrderSummary from './OrderSummary';
import { useCartAPICtx } from '../context/cartContext';
import Loader from '../common/Loader';

export default function OrderSummarySelection() {
  const [ordersArray, setOrdersArray] = useState(null);

  const { ordersLoading, ordersListData } = useCartAPICtx();

  const orderHandler = (list) => {
    setOrdersArray(list);
  };

  return (
    <Fragment>
      <Navbar />
      <Category />
      {!ordersArray ? (
        <div>
          {ordersLoading ? (
            <Loader />
          ) : (
            <div>
              <h1 className='primary lg sb xs-s cen mg-half'>ORDER HISTORY</h1>
              <div className='card summary__select shdw'>
                <div className='sm-s mg-half'>
                  <ul className='stack'>
                    {ordersListData &&
                      ordersListData
                        .slice(0)
                        .reverse()
                        .map((elem, index) => {
                          return (
                            <li
                              key={index}
                              className='stack__summary__item flex-ct-sb shadow xs-s mg-full'
                              onClick={orderHandler.bind(this, elem.ordersList)}
                            >
                              <div className='flex-ct-st'>
                                <img
                                  src='orders.webp'
                                  alt='Avatar'
                                  className='avatar avatar--sm sq'
                                />
                                <h1 className='primary sm sb'>
                                  Order Summary{' '}
                                  {ordersListData.length - index ?? 1}
                                </h1>
                              </div>
                              <i className='fas fa-chevron-right fl-rt'></i>
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1
            className='pageheader shadow'
            onClick={orderHandler.bind(this, null)}
          >
            <i className='fa-solid fa-chevron-left'></i>Go Back
          </h1>
          {ordersLoading ? <Loader /> : <OrderSummary orders={ordersArray} />}
        </div>
      )}
      <Footer fixed={!ordersArray} />
    </Fragment>
  );
}
