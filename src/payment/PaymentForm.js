import { Fragment } from 'react';
import './payment.css';
import { useAddrCtx } from '../context/addressContext';

export default function PaymentForm(props) {
  const { upiId, bank, name, number, type, month, year, update } = props;
  const { openForm } = useAddrCtx();
  return (
    <Fragment>
      {upiId ? (
        <div className='card payment shdw'>
          <h1 className='tertiary md sb cen xs-s'>
            {update ? 'EDIT THE DETAILS' : 'ENTER UPI ID'}
          </h1>
          <hr />
          <form className='sm-s'>
            <div className='fields'>
              <label for='owner' className='label'>
                UPI ID
              </label>
              <input
                className='input sm-s'
                type='text'
                name='upi'
                id='upi'
                autocomplete='off'
                placeholder='ENTER UPI ID'
                value={upiId}
                required
              />
            </div>
            <div className='flex-ct-sb xs-s'>
              <button type='submit' className='btn btn--auth--solid sb'>
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
            <div className='fields'>
              <label for='owner' className='label'>
                CARD NAME
              </label>
              <input
                className='input sm-s'
                type='text'
                name='owner'
                id='owner'
                autocomplete='off'
                placeholder='CARD NAME'
                value={name}
                required
              />
            </div>
            <div className='fields'>
              <label for='bank' className='label'>
                BANK NAME
              </label>
              <input
                className='input sm-s'
                type='text'
                name='bank'
                id='bank'
                autocomplete='off'
                placeholder='BANK NAME'
                value={bank}
                required
              />
            </div>
            <div className='fields'>
              <label for='card_no' className='label'>
                CARD NUMBER
              </label>
              <input
                className='input sm-s'
                type='number'
                name='card_no'
                id='card_no'
                autocomplete='off'
                placeholder='CARD NUMBER'
                value={number}
                required
              />
            </div>
            <div className='fields'>
              <label for='expiry' className='label'>
                EXPIRY DATE
              </label>
              <input
                className='input sm-s'
                type='month'
                name='expiry'
                id='expiry'
                value={`${year}-${month}`}
                required
              />
            </div>
            <div className='fields'>
              <label for='type' className='label'>
                CARD TYPE
              </label>
              <select
                id='type'
                name='type'
                className='input select sm-s'
                value={type}
                required
              >
                <option value='' className='primary--light' selected>
                  -- Select a Type --
                </option>
                <option value='cc'>Credit Card</option>
                <option value='dc'>Debit Card</option>
              </select>
            </div>
            <div className='flex-ct-sb xs-s'>
              <button type='submit' className='btn btn--auth--solid sb'>
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
