import { Fragment } from 'react';
import './address.css';
import { useAddrCtx, useAddrApiCtx } from '../context/addressContext';
import AddressForm from './AddressForm';

export default function AddressCard(props) {
  const {
    id,
    name,
    email,
    mobile,
    type,
    line_1,
    line_2,
    landmark,
    city,
    state,
    pincode,
    noEdit,
    select
  } = props;

  const { formId, openForm } = useAddrCtx();
  const { deleteAddress } = useAddrApiCtx();

  return (
    <Fragment>
      {formId && formId === id ? (
        <AddressForm {...props} update={true} />
      ) : (
        <div class='card address shdw'>
          <div class='flex-ct-sb btn--auth--solid xs-s'>
            <h1 class='lg sb'>{select ? 'Select Address' : 'Edit Address'}</h1>
            {select && <button class='btn btn--icons sb'>SELECT</button>}
          </div>
          <div class='sm-s'>
            <h1 class='lg sb'>{type}</h1>
            <h1 class='primary md sb mg-half'>{name}</h1>
            <div class='address__line'>
              <span class='primary md sb'>
                <i class='fa-regular fa-address-book tertiary md'></i>
              </span>
              <span class=''>
                <span class='primary md sb'> {line_1}, </span>
                <span class='primary md sb'> {line_2}, </span>
                <span class='primary md sb'> {landmark}, </span>
                <span class='primary md sb'> {city}, </span>
                <span class='primary md sb'> {state} </span>
                <span class='primary md sb'> {pincode} </span>
              </span>
            </div>
            <h1 class='primary md sb mg-half'>
              <i class='fa-solid fa-mobile-screen-button tertiary md'></i>{' '}
              {mobile}
            </h1>
            <h1 class='primary md sb'>
              <i class='fa-solid fa-envelope tertiary md'></i> {email}
            </h1>
            {!noEdit && (
              <div class='flex-ct-sb mg-half'>
                <button
                  class='btn btn--auth--solid sb'
                  onClick={openForm.bind(this, id)}
                >
                  UPDATE
                </button>
                <button class='btn sb' onClick={deleteAddress.bind(this, id)}>
                  DELETE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
