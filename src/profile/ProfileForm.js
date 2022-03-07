import './profile.css';
import { Fragment } from 'react';

export default function ProfileForm() {
  return (
    <Fragment>
      <div className='card card__profile shadow sm-s'>
        <h1 className='primary md sb mg-half'>UPDATE PROFILE</h1>
        <hr />
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
            />
          </div>
          <div className='fields'>
            <label for='phone--field' className='label'>
              Phone:
            </label>
            <input
              className='input sm-s'
              type='number'
              name='phone'
              id='phone--field'
              autocomplete='mobile'
            />
          </div>
          <div className='fields'>
            <label for='dob--field' className='label'>
              DOB:
            </label>
            <input
              className='input sm-s'
              type='date'
              name='dob'
              id='dob--field'
              autocomplete='off'
            />
          </div>
          <button
            type='submit'
            className='btn btn--wide btn--auth--solid sb mg-half'
          >
            UPDATE
          </button>
        </form>
      </div>
    </Fragment>
  );
}
