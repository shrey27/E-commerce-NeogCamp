import { Fragment, useEffect, useState } from 'react';
import './address.css';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';
import { useAddrCtx, useAddrApiCtx } from '../context/addressContext';
import Loader from '../common/Loader';

export default function Address({ select }) {
  const [addressList, setAddressList] = useState([]);
  const { formId, openForm } = useAddrCtx();
  const { loading, adrList } = useAddrApiCtx();

  useEffect(() => {
    setAddressList(adrList);
  }, [adrList]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h1 class='primary lg cen xs-s mg-full'>
            {select ? 'SELECT AN ADDRESS' : 'MANAGE YOUR ADDRESS'}{' '}
          </h1>
          <div class='flex-ct-ct flex-vertical'>
            {addressList &&
              addressList.map((elem, index) => {
                return (
                  <AddressCard key={index * 2} {...elem} select={select} />
                );
              })}
            {formId === 0 ? (
              <AddressForm />
            ) : (
              <div class='card address shdw'>
                <div
                  class='flex-ct-sb btn--auth xs-s'
                  onClick={() => openForm(0)}
                >
                  <h1 class='md'>Add New Address</h1>
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
