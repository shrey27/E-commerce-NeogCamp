import { Fragment } from 'react';
import './address.css';
import { useAddrCtx } from './addressContext';
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
    redirect,
    select
  } = props;
  const { formId, openForm } = useAddrCtx();
  return (
    <Fragment>
      {formId && formId === id ? (
        <AddressForm {...props} update={true} />
      ) : (
        <div class='card address shdw'>
          <div class='flex-ct-sb btn--auth--solid xs-s'>
            <h1 class='lg sb'>{select ? 'Select Address' : 'Edit Address'}</h1>
            {select && <button class='btn sb'>SELECT</button>}
          </div>
          <div class='sm-s'>
            <h1 class='lg sb'>{type}</h1>
            <h1 class='primary md sb mg-half'>{name}</h1>
            <div class='address__line'>
              <span class='primary sm sb'>
                <i class='fa-regular fa-address-book tertiary md'></i>
              </span>
              <span class=''>
                <span class='primary sm sb'>{line_1},</span>
                <span class='primary sm sb'>{line_2},</span>
                <span class='primary sm sb'>{landmark},</span>
                <span class='primary sm sb'>{city},</span>
                <span class='primary sm sb'>{state}</span>
                <span class='primary sm sb'>{pincode}</span>
              </span>
            </div>
            <h1 class='primary sm sb mg-half'>
              <i class='fa-solid fa-mobile-screen-button tertiary md'></i>{' '}
              {mobile}
            </h1>
            <h1 class='primary sm sb'>
              <i class='fa-solid fa-envelope tertiary md'></i> {email}
            </h1>
            {!noEdit &&
              (redirect ? (
                <div class='flex-ct-sb mg-half'>
                  <button class='btn btn--auth--solid sb'>EDIT DETAILS</button>
                </div>
              ) : (
                <div class='flex-ct-sb mg-half'>
                  <button
                    class='btn btn--auth--solid sb'
                    onClick={openForm.bind(this, id)}
                  >
                    UPDATE
                  </button>
                  <button class='btn sb'>DELETE</button>
                </div>
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}
