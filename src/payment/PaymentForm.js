import { Fragment } from 'react';
import './payment.css';
import { useFormOpenCtx } from '../context/formOpenContext';
import { useFormCtx } from '../context/formContext';
import { months, years } from '../common/validations';

export default function PaymentForm(props) {
  const { upiId, update } = props;
  const { openForm } = useFormOpenCtx();
  const { showError, form, onFocusOut, handleFormChange, formSubmitHandler } =
    useFormCtx();

  console.log(form);
  return (
    <Fragment>
      {upiId ? (
        <div className='card payment shdw'>
          <h1 className='tertiary md sb cen xs-s'>
            {update ? 'EDIT THE DETAILS' : 'ENTER UPI ID'}
          </h1>
          <hr />

          {showError && !form.isFormValid && (
            <div className='tag cen md mg-half'>
              Please fill all the fields correctly
            </div>
          )}

          <form className='sm-s'>
            <div className='payment__fields'>
              <label for='upiId' className='label'>
                UPI ID
              </label>
              <input
                className='input sm-s'
                type='text'
                name='upiId'
                id='upiId'
                autocomplete='off'
                placeholder='Enter your UPI ID'
                value={form?.upiId?.value}
                onChange={(e) => handleFormChange(e)}
                onBlur={(e) => onFocusOut(e)}
              />
              {form.upiId.touched && form.upiId.hasError && (
                <h1 className='input__error'>{form.upiId.error}</h1>
              )}
            </div>
            <div className='flex-ct-sb xs-s'>
              <button
                className='btn btn--auth--solid sb'
                onClick={(e) => formSubmitHandler(e, 'isFormValid')}
              >
                {update ? 'UPDATE' : 'ADD'} UPI ID
              </button>
              <button
                className='btn btn--auth sb'
                onClick={openForm.bind(this)}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className='card payment shdw'>
          <h1 className='btn--auth--solid md sb cen xs-s'>
            {update ? 'EDIT THE DETAILS' : 'ENTER CARD DETAILS'}
          </h1>
          <form action='#' className='sm-s'>
            <div className='payment__fields'>
              <label for='name' className='label'>
                CARD NAME
              </label>
              <input
                className='input sm-s'
                type='text'
                name='name'
                id='name'
                placeholder='Name on Card'
                value={form?.name?.value}
                onChange={(e) => handleFormChange(e)}
                onBlur={(e) => onFocusOut(e)}
              />
              {form.name.touched && form.name.hasError && (
                <h1 className='input__error'>{form.name.error}</h1>
              )}
            </div>
            <div className='payment__fields'>
              <label for='bank' className='label'>
                BANK NAME
              </label>
              <input
                className='input sm-s'
                type='text'
                name='bank'
                id='bank'
                autocomplete='off'
                placeholder='Name of Bank'
                value={form?.bank?.value}
                onChange={(e) => handleFormChange(e)}
                onBlur={(e) => onFocusOut(e)}
              />
              {form.bank.touched && form.bank.hasError && (
                <h1 className='input__error'>{form.bank.error}</h1>
              )}
            </div>
            <div className='payment__fields'>
              <label for='number' className='label'>
                CARD NUMBER
              </label>
              <input
                className='input sm-s'
                type='number'
                name='number'
                id='number'
                autocomplete='off'
                placeholder='CARD NUMBER'
                value={form?.number?.value}
                onChange={(e) => handleFormChange(e)}
                onBlur={(e) => onFocusOut(e)}
              />
              {form.number.touched && form.number.hasError && (
                <h1 className='input__error'>{form.number.error}</h1>
              )}
            </div>
            <div className='payment__fields'>
              <label for='month' className='label'>
                EXPIRY MONTH
              </label>
              <select
                id='month'
                name='month'
                className='input select sm-s'
                value={form?.month?.value}
                onChange={(e) => handleFormChange(e)}
                onBlur={(e) => onFocusOut(e)}
              >
                <option value='' className='primary--light'>
                  -- Select a Month --
                </option>
                {months.map((elem, idx) => {
                  return (
                    <option key={idx + elem} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
              {form.month.touched && form.month.hasError && (
                <h1 className='input__error'>{form.month.error}</h1>
              )}
            </div>

            <div className='payment__fields'>
              <label for='year' className='label'>
                EXPIRY YEAR
              </label>
              <select
                id='year'
                name='year'
                className='input select sm-s'
                value={form?.year?.value}
                onChange={(e) => handleFormChange(e)}
                onBlur={(e) => onFocusOut(e)}
              >
                <option value='' className='primary--light'>
                  -- Select a Year --
                </option>
                {years.map((elem, idx) => {
                  return (
                    <option key={idx + elem} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
              {form.year.touched && form.year.hasError && (
                <h1 className='input__error'>{form.year.error}</h1>
              )}
            </div>

            <div className='payment__fields'>
              <label for='cardtype' className='label'>
                CARD TYPE
              </label>
              <select
                id='cardtype'
                name='cardtype'
                className='input select sm-s'
                value={form?.cardtype?.value}
                onChange={(e) => handleFormChange(e)}
                onBlur={(e) => onFocusOut(e)}
              >
                <option value='' className='primary--light'>
                  -- Select a Type --
                </option>
                <option value='Credit'>Credit Card</option>
                <option value='Debit'>Debit Card</option>
              </select>
              {form.cardtype.touched && form.cardtype.hasError && (
                <h1 className='input__error'>{form.cardtype.error}</h1>
              )}
            </div>
            <div className='flex-ct-sb xs-s'>
              <button
                className='btn btn--auth--solid sb'
                onClick={(e) => formSubmitHandler(e, 'isFormValid')}
              >
                {update ? 'UPDATE' : 'ADD'} CARD
              </button>
              <button
                className='btn btn--auth sb'
                onClick={openForm.bind(this)}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}
    </Fragment>
  );
}
