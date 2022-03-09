import { Fragment } from 'react';
import './address.css';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';
import { useAddrApiCtx } from '../context/addressContext';
import { useFormOpenCtx } from '../context/formOpenContext';
import Loader from '../common/Loader';
import { FormProvider } from '../context/formContext';

export default function Address({ select }) {
  const { formId, openForm } = useFormOpenCtx();
  const { loading, listItems } = useAddrApiCtx();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h1 className='primary lg cen xs-s mg-full'>
            {select ? 'SELECT AN ADDRESS' : 'MANAGE YOUR ADDRESS'}{' '}
          </h1>
          <div className='flex-ct-ct flex-vertical'>
            {listItems &&
              listItems.map((elem, index) => {
                return (
                  <AddressCard key={index * 2} {...elem} select={select} />
                );
              })}
            {formId === 0 ? (
              <FormProvider fieldSet='addressFormFields'>
                <AddressForm />
              </FormProvider>
            ) : (
              <div className='card address shdw'>
                <div
                  className='flex-ct-sb btn--auth xs-s'
                  onClick={() => openForm(0)}
                >
                  <h1 className='md'>Add New Address</h1>
                  <i className='fas fa-chevron-right fl-rt'></i>
                </div>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </>
  );
}
