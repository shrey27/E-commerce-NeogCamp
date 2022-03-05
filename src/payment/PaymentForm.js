import { Fragment } from 'react';
import './payment.css';
import { usePmtCtx } from '../context/paymentContext';

export default function PaymentForm(props) {
  const { upiId, bank, name, number, type, month, year, update } = props;
  const { openModeForm } = usePmtCtx();

  return (
    <Fragment>
      {upiId ? (
        <div class='card payment shdw'>
          <h1 class='tertiary md sb cen xs-s'>
            {update ? 'EDIT THE DETAILS' : 'ENTER UPI ID'}
          </h1>
          <hr />
          <form class='sm-s'>
            <div class='fields'>
              <label for='owner' class='label'>
                UPI ID
              </label>
              <input
                class='input sm-s'
                type='text'
                name='upi'
                id='upi'
                autocomplete='off'
                placeholder='ENTER UPI ID'
                value={upiId}
                required
              />
            </div>
            <div class='flex-ct-sb xs-s'>
              <button type='submit' class='btn btn--auth--solid sb'>
                {update ? 'UPDATE' : 'ADD'} UPI ID
              </button>
              <button
                class='btn btn--auth sb'
                onClick={openModeForm.bind(this)}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div class='card payment shdw'>
          <h1 class='btn--auth--solid md sb cen xs-s'>
            {update ? 'EDIT THE DETAILS' : 'ENTER CARD DETAILS'}
          </h1>
          <form action='#' class='sm-s'>
            <div class='fields'>
              <label for='owner' class='label'>
                CARD NAME
              </label>
              <input
                class='input sm-s'
                type='text'
                name='owner'
                id='owner'
                autocomplete='off'
                placeholder='CARD NAME'
                value={name}
                required
              />
            </div>
            <div class='fields'>
              <label for='bank' class='label'>
                BANK NAME
              </label>
              <input
                class='input sm-s'
                type='text'
                name='bank'
                id='bank'
                autocomplete='off'
                placeholder='BANK NAME'
                value={bank}
                required
              />
            </div>
            <div class='fields'>
              <label for='card_no' class='label'>
                CARD NUMBER
              </label>
              <input
                class='input sm-s'
                type='number'
                name='card_no'
                id='card_no'
                autocomplete='off'
                placeholder='CARD NUMBER'
                value={number}
                required
              />
            </div>
            <div class='fields'>
              <label for='expiry' class='label'>
                EXPIRY DATE
              </label>
              <input
                class='input sm-s'
                type='month'
                name='expiry'
                id='expiry'
                value={`${year}-${month}`}
                required
              />
            </div>
            <div class='fields'>
              <label for='type' class='label'>
                CARD TYPE
              </label>
              <select
                id='type'
                name='type'
                class='input select sm-s'
                value={type}
                required
              >
                <option value='' class='primary--light' selected>
                  -- Select a Type --
                </option>
                <option value='cc'>Credit Card</option>
                <option value='dc'>Debit Card</option>
              </select>
            </div>
            <div class='flex-ct-sb xs-s'>
              <button type='submit' class='btn btn--auth--solid sb'>
                {update ? 'UPDATE' : 'ADD'} CARD
              </button>
              <button
                class='btn btn--auth sb'
                onClick={openModeForm.bind(this)}
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
