import './payment.css';
import PaymentCard from './PaymentCard';
import PaymentForm from './PaymentForm';
import { useFormOpenCtx } from '../context/formOpenContext';
import { usePmtApiCtx } from '../context/paymentContext';
import Loader from '../common/Loader';
import { FormProvider } from '../context/formContext';

export default function Payment() {
  const { formId, openForm } = useFormOpenCtx();
  const { paymentLoading, paymentOptions } = usePmtApiCtx();

  return (
    <>
      {paymentLoading ? (
        <Loader />
      ) : (
        <div className='flex-st-ct'>
          <div>
            <h1 className='primary lg cen xs-s mg-full'>MANAGE YOUR CARDS</h1>
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
                  <i className='fas fa-chevron-right'></i>
                </div>
              </div>
            )}
            <div>
              {paymentOptions &&
                paymentOptions.map((elem, index) => {
                  return elem.cardtype ? (
                    <PaymentCard key={index * 2} {...elem} />
                  ) : (
                    <></>
                  );
                })}
            </div>
          </div>

          <div>
            <h1 className='primary lg cen xs-s mg-full'>
              MANAGE YOUR UPI ID's
            </h1>
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
            <div>
              {paymentOptions &&
                paymentOptions.map((elem, index) => {
                  return !elem.cardtype ? (
                    <PaymentCard key={index * 2} {...elem} />
                  ) : (
                    <></>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
