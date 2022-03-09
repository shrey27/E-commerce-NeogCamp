import { Fragment } from 'react';
import './address.css';
import { useAddrApiCtx } from '../context/addressContext';
import { useFormOpenCtx } from '../context/formOpenContext';
import AddressForm from './AddressForm';
import { FormProvider } from '../context/formContext';

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

  const { formId, openForm } = useFormOpenCtx();
  const { deleteAddress } = useAddrApiCtx();

  const handleOpenForm = () => {
    openForm(id);
  };

  return (
    <Fragment>
      {formId && formId === id ? (
        <FormProvider
          fieldSet='addressFormFields'
          formData={{ ...props, update: true }}
        >
          <AddressForm update={true} />
        </FormProvider>
      ) : (
        <div className='card address shdw'>
          <div className='flex-ct-sb btn--auth--solid xs-s'>
            <h1 className='lg sb'>
              {select ? 'Select Address' : 'Edit Address'}
            </h1>
            {select && <button className='btn btn--icons sb'>SELECT</button>}
          </div>
          <div className='md-s'>
            <h1 className='primary lg sb'>{type}</h1>
            <h1 className='primary md sb mg-half'>{name}</h1>
            <div className='address__line'>
              <span className='primary md sb'>
                <i className='fa-regular fa-address-book tertiary md'></i>
              </span>
              <span className=''>
                <span className='primary md sb'> {line_1}, </span>
                <span className='primary md sb'> {line_2}, </span>
                <span className='primary md sb'> {landmark}, </span>
                <span className='primary md sb'> {city}, </span>
                <span className='primary md sb'> {state} </span>
                <span className='primary md sb'> {pincode} </span>
              </span>
            </div>
            <h1 className='primary md sb mg-half'>
              <i className='fa-solid fa-mobile-screen-button tertiary md'></i>{' '}
              {mobile}
            </h1>
            <h1 className='primary md sb'>
              <i className='fa-solid fa-envelope tertiary md'></i> {email}
            </h1>
            {!noEdit && (
              <div className='flex-ct-sb mg-half'>
                <button
                  className='btn btn--auth--solid sb'
                  onClick={handleOpenForm}
                >
                  UPDATE
                </button>
                <button
                  className='btn sb'
                  onClick={deleteAddress.bind(this, id)}
                >
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
