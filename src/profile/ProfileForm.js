import './profile.css';
import { Fragment } from 'react';
import { useFormCtx } from '../context/formContext';

export default function ProfileForm({ update }) {
  const { showError, form, onFocusOut, handleFormChange, formSubmitHandler } =
    useFormCtx();

  return (
    <Fragment>
      <div className='card card__profile shadow sm-s'>
        <h1 className='primary md sb mg-half'>UPDATE PROFILE</h1>
        <hr />
        {showError && !form.isFormValid && (
          <div className='tag cen md mg-half'>
            Please fill all the fields correctly
          </div>
        )}
        <form action='../homepage/'>
          <div className='fields'>
            <label for='name--field' className='label'>
              Name:
            </label>
            <input
              className='input sm-s'
              type='text'
              name='name'
              id='name--field'
              autocomplete='off'
              value={form?.name?.value}
              onChange={(e) => handleFormChange(e)}
              onBlur={(e) => onFocusOut(e)}
            />
          </div>
          <div className='fields'>
            <label for='email--field' className='label'>
              Email:
            </label>
            <input
              className='input sm-s'
              type='email'
              name='email'
              id='email--field'
              autocomplete='email'
              value={form?.email?.value}
              onChange={(e) => handleFormChange(e)}
              onBlur={(e) => onFocusOut(e)}
            />
          </div>
          <div className='fields'>
            <label for='phone--field' className='label'>
              Phone:
            </label>
            <input
              className='input sm-s'
              type='number'
              name='mobile'
              id='phone--field'
              autocomplete='mobile'
              value={form?.mobile?.value}
              onChange={(e) => handleFormChange(e)}
              onBlur={(e) => onFocusOut(e)}
            />
          </div>
          <div className='fields'>
            <label for='dob' className='label'>
              DOB:
            </label>
            <input
              className='input sm-s'
              type='date'
              name='dob'
              id='dob'
              autocomplete='off'
              value={form?.dob?.value}
              onChange={(e) => handleFormChange(e)}
              onBlur={(e) => onFocusOut(e)}
            />
          </div>
          <button
            type='submit'
            className='btn btn--wide btn--auth--solid sb mg-half'
            onClick={(e) => formSubmitHandler(e, 'isFormValid')}
          >
            {update ? 'UPDATE' : 'ADD'}
          </button>
        </form>
      </div>
    </Fragment>
  );
}
