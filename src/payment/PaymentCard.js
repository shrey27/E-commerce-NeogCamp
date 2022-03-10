import { Fragment } from 'react';
import './payment.css';
import PaymentForm from './PaymentForm';
import { useFormOpenCtx } from '../context/formOpenContext';
import { FormProvider } from '../context/formContext';
import { usePmtApiCtx } from '../context/paymentContext';
import { useCheckoutCtx } from '../context/cartContext';

export default function PaymentCard(props) {
  const {
    id,
    upiId,
    bank,
    name,
    number,
    cardtype,
    month,
    year,
    noEdit,
    select
  } = props;

  const { formId, openForm } = useFormOpenCtx();
  const { deleteOption } = usePmtApiCtx();
  const { dispatch } = useCheckoutCtx();

  const addHyphen = (number) => {
    const stringNumber = '' + number;
    return stringNumber.match(/\d{4}/g).join('-');
  };

  const handleSelect = () => {
    dispatch({ type: 'UPDATE_PAYMENT_MODE', payload: { ...props } });
  };

  return (
    <Fragment>
      {upiId ? (
        formId === id ? (
          <FormProvider
            fieldSet='upiFormField'
            formData={{ ...props, update: true }}
          >
            <PaymentForm {...props} update={true} />
          </FormProvider>
        ) : (
          <div className='card payment shdw'>
            <div className='flex-ct-sb btn--auth--solid xs-s'>
              <h1 className='md sb'>UPI ID</h1>
              {select && (
                <button
                  className='btn btn--icons btn--add sb'
                  onClick={handleSelect}
                >
                  SELECT
                </button>
              )}
            </div>
            <div className='md-s'>
              <h2 className='primary md mg-half'>
                UPI ID: <span className='clr'>{upiId}</span>
              </h2>
              {!noEdit && (
                <div className='flex-ct-sb mg-half'>
                  <button
                    className='btn btn--auth--solid sb'
                    onClick={openForm.bind(this, id)}
                  >
                    UPDATE
                  </button>
                  <button
                    className='btn sb'
                    onClick={deleteOption.bind(this, id)}
                  >
                    DELETE
                  </button>
                </div>
              )}
            </div>
          </div>
        )
      ) : formId === id ? (
        <FormProvider
          fieldSet='cardFormFields'
          formData={{ ...props, update: true }}
        >
          <PaymentForm {...props} update={true} />
        </FormProvider>
      ) : (
        <div className='card payment shdw'>
          <div className='flex-ct-sb btn--auth--solid xs-s'>
            <h1 className='md sb'>{select ? 'Choose Card' : cardtype}</h1>
            {select && (
              <button
                className='btn btn--icons btn--add sb'
                onClick={handleSelect}
              >
                SELECT
              </button>
            )}
          </div>
          <div className='md-s'>
            <h2 className='primary md'>
              Name on Card: <span className='clr fl-rt'> {name}</span>
            </h2>
            <h2 className='primary md mg-half'>
              Name of Bank: <span className='clr fl-rt'> {bank}</span>
            </h2>
            <h2 className='primary md mg-half'>
              Card Number
              <span className='clr fl-rt'>{addHyphen(number)}</span>
            </h2>
            <h2 className='primary md mg-half'>
              Month of Expiry: <span className='clr fl-rt'> {month}</span>
            </h2>
            <h2 className='primary md mg-half'>
              Year of Expiry: <span className='clr fl-rt'> {year}</span>
            </h2>
            {!noEdit && (
              <div className='flex-ct-sb mg-half'>
                <button
                  className='btn btn--auth--solid sb'
                  onClick={openForm.bind(this, id)}
                >
                  UPDATE
                </button>
                <button
                  className='btn sb'
                  onClick={deleteOption.bind(this, id)}
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
