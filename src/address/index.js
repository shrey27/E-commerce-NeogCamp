import { Fragment } from 'react';
import './address.css';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';
const addressList = [
  {
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
export default function Address({ select }) {
  return (
    <Fragment>
      <h1 class='primary lg cen xs-s'>MANAGE ADDRESS</h1>
      {addressList &&
        addressList.map((elem, index) => {
          return <AddressCard key={index * 2} {...elem} select={select} />;
        })}
      <div class='card address shdw'>
        <div class='flex-ct-sb btn--error xs-s'>
          <h1 class='md'>Add New Address</h1>
          <i class='fas fa-chevron-right fl-rt'></i>
        </div>
      </div>
      {/* <AddressForm/> */}
    </Fragment>
  );
}
