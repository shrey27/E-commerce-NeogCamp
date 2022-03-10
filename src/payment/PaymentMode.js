import { Fragment } from 'react';
import './payment.css';
import PaymentCard from './PaymentCard';
import { useFormOpenCtx } from '../context/formOpenContext';
import { usePmtApiCtx } from '../context/paymentContext';
import PaymentForm from './PaymentForm';
import Loader from '../common/Loader';
import { FormProvider } from '../context/formContext';

export default function PaymentMode({ upi }) {
  const { formId, openForm } = useFormOpenCtx();
  const { paymentLoading, paymentOptions } = usePmtApiCtx();

  return (
    <>
      {paymentLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {!upi ? (
            <Fragment>
              <h1 className='primary lg cen xs-s mg-full'>SELECT A CARD</h1>
              <div className='flex-ct-ct flex-vertical'>
                {paymentOptions &&
                  paymentOptions.map((elem, index) => {
                    return (
                      elem.cardtype && (
                        <PaymentCard key={index * 2} {...elem} select={true} />
                      )
                    );
                  })}
                {formId === 0 ? (
                  <FormProvider fieldSet='cardFormFields'>
                    <PaymentForm />
                  </FormProvider>
                ) : (
                  <div className='card payment shdw'>
                    <div
                      className='flex-ct-sb btn--auth xs-s'
                      onClick={openForm.bind(this, 0)}
                    >
                      <h1 className='md'>Add New Card</h1>
                      <i className='fas fa-chevron-right fl-rt'></i>
                    </div>
                  </div>
                )}
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <h1 className='primary lg cen xs-s mg-full'>SELECT A UPI ID</h1>
              <div className='flex-ct-ct flex-vertical'>
                {paymentOptions &&
                  paymentOptions.map((elem, index) => {
                    return (
                      !elem.cardtype && (
                        <PaymentCard key={index * 2} {...elem} select={true} />
                      )
                    );
                  })}
                {formId === 100 ? (
                  <FormProvider fieldSet='upiFormField'>
                    <PaymentForm upiId={true} />
                  </FormProvider>
                ) : (
                  <div className='card payment shdw'>
                    <div
                      className='flex-ct-sb btn--auth xs-s'
                      onClick={openForm.bind(this, 100)}
                    >
                      <h1 className='md'>Add New UPI ID</h1>
                      <i className='fas fa-chevron-right fl-rt'></i>
                    </div>
                  </div>
                )}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </>
  );
}
