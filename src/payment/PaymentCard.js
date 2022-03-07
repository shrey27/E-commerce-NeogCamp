import { Fragment } from 'react';
import './payment.css';
import PaymentForm from './PaymentForm';
import { useAddrCtx } from '../context/addressContext';

export default function PaymentCard(props) {
  const { id, upiId, bank, name, number, type, month, year, noEdit, select } =
    props;

  const { formId, openForm } = useAddrCtx();

  return (
    <Fragment>
      {upiId ? (
        formId === id ? (
          <PaymentForm {...props} update={true} />
        ) : (
          <div className='card payment shdw'>
            <div className='flex-ct-sb btn--auth--solid xs-s'>
              <h1 className='lg sb'>UPI ID</h1>
              {select && (
                <button className='btn btn--icons btn--add sb'>SELECT</button>
              )}
            </div>
            <div className='sm-s'>
              <h2 className='primary sm mg-half'>
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
                  <button className='btn sb'>DELETE</button>
                </div>
              )}
            </div>
          </div>
        )
      ) : formId === id ? (
        <PaymentForm {...props} update={true} />
      ) : (
        <div className='card payment shdw'>
          <div className='flex-ct-sb btn--auth--solid xs-s'>
            <h1 className='lg sb'>{select ? 'Choose Card' : type}</h1>
            {select && (
              <button className='btn btn--icons btn--add sb'>SELECT</button>
            )}
          </div>
          <div className='sm-s'>
            <h2 className='primary sm'>
              NAME: <span className='clr'>{name}</span>
            </h2>
            <h2 className='primary sm'>
              BANK NAME: <span className='clr'>{bank}</span>
            </h2>
            <h2 className='primary sm'>
              CARD NO. <span className='clr'>{number}</span>
            </h2>
            <h2 className='primary sm'>
              EXPIRY:{' '}
              <span className='clr'>
                {month}/{year}
              </span>
            </h2>
            {!noEdit && (
              <div className='flex-ct-sb mg-half'>
                <button
                  className='btn btn--auth--solid sb'
                  onClick={openForm.bind(this, id)}
                >
                  UPDATE
                </button>
                <button className='btn sb'>DELETE</button>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
