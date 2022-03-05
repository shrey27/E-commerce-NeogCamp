import { Fragment } from 'react';
import './payment.css';
import { usePmtCtx } from './paymentContext';
import PaymentForm from './PaymentForm';

export default function PaymentCard(props) {
  const { id, upiId, bank, name, number, type, month, year, noEdit, select } =
    props;
  const { modeId, openModeForm } = usePmtCtx();
  return (
    <Fragment>
      {upiId ? (
        modeId === id ? (
          <PaymentForm {...props} update={true} />
        ) : (
          <div class='card payment shdw'>
            <div class='flex-ct-sb btn--auth--solid xs-s'>
              <h1 class='lg sb'>UPI ID</h1>
              {select && <button class='btn  btn--add sb'>SELECT</button>}
            </div>
            <div class='sm-s'>
              <h2 class='primary sm mg-half'>
                UPI ID: <span class='clr'>{upiId}</span>
              </h2>
              {!noEdit && (
                <div class='flex-ct-sb mg-half'>
                  <button
                    class='btn btn--auth--solid sb'
                    onClick={openModeForm.bind(this, id)}
                  >
                    UPDATE
                  </button>
                  <button class='btn sb'>DELETE</button>
                </div>
              )}
            </div>
          </div>
        )
      ) : modeId === id ? (
        <PaymentForm {...props} update={true} />
      ) : (
        <div class='card payment shdw'>
          <div class='flex-ct-sb btn--auth--solid xs-s'>
            <h1 class='lg sb'>{select ? 'Choose Card' : type}</h1>
            {select && <button class='btn  btn--add sb'>SELECT</button>}
          </div>
          <div class='sm-s'>
            <h2 class='primary sm'>
              NAME: <span class='clr'>{name}</span>
            </h2>
            <h2 class='primary sm'>
              BANK NAME: <span class='clr'>{bank}</span>
            </h2>
            <h2 class='primary sm'>
              CARD NO. <span class='clr'>{number}</span>
            </h2>
            <h2 class='primary sm'>
              EXPIRY:{' '}
              <span class='clr'>
                {month}/{year}
              </span>
            </h2>
            {!noEdit && (
              <div class='flex-ct-sb mg-half'>
                <button
                  class='btn btn--auth--solid sb'
                  onClick={openModeForm.bind(this, id)}
                >
                  UPDATE
                </button>
                <button class='btn sb'>DELETE</button>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
