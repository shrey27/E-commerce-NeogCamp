import { Fragment } from 'react';
import './address.css';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';
import { useAddrCtx } from './addressContext';

const addressList = [
  {
    id: 1,
    name: 'Shrey Pandey',
    email: 'abc@xyz.com',
    mobile: 9090909090,
    type: 'HOME',
    line_1: '76',
    line_2: 'abc',
    landmark: 'xse',
    city: 'klkl',
    state: 'sdsd',
    pincode: 122112
  },
  {
    id: 2,
    name: 'Shrey Pandey',
    email: 'abc@xyz.com',
    mobile: 9090909090,
    type: 'HOME',
    line_1: '76',
    line_2: 'abc',
    landmark: 'xse',
    city: 'klkl',
    state: 'sdsd',
    pincode: 122112
  }
];
export default function Address({ select, redirect }) {
  const { formId, openForm } = useAddrCtx();
  return (
    <Fragment>
      <h1 class='primary lg cen xs-s mg-full'>
        {select ? 'SELECT AN ADDRESS' : 'MANAGE YOUR ADDRESS'}{' '}
      </h1>
      <div class='flex-ct-ct flex-vertical'>
        {addressList &&
          addressList.map((elem, index) => {
            return (
              <AddressCard
                key={index * 2}
                {...elem}
                select={select}
                redirect={redirect}
              />
            );
          })}
        {formId === 0 ? (
          <AddressForm />
        ) : (
          <div class='card address shdw'>
            <div class='flex-ct-sb btn--auth xs-s' onClick={() => openForm(0)}>
              <h1 class='md'>Add New Address</h1>
              <i class='fas fa-chevron-right fl-rt'></i>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
