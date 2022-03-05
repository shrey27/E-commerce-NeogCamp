import './profile.css';
import { Fragment } from 'react';

export default function ProfileForm() {
  return (
    <Fragment>
      <div class='card card__profile shadow sm-s'>
        <h1 class='primary md sb mg-half'>UPDATE PROFILE</h1>
        <hr />
        <form action='../homepage/'>
          <div class='fields'>
            <label for='name--field' class='label'>
              Name:
            </label>
            <input
              class='input sm-s'
              type='text'
              name='name'
              id='name--field'
              autocomplete='off'
            />
          </div>
          <div class='fields'>
            <label for='email--field' class='label'>
              Email:
            </label>
            <input
              class='input sm-s'
              type='email'
              name='email'
              id='email--field'
              autocomplete='email'
            />
          </div>
          <div class='fields'>
            <label for='phone--field' class='label'>
              Phone:
            </label>
            <input
              class='input sm-s'
              type='number'
              name='phone'
              id='phone--field'
              autocomplete='mobile'
            />
          </div>
          <div class='fields'>
            <label for='dob--field' class='label'>
              DOB:
            </label>
            <input
              class='input sm-s'
              type='date'
              name='dob'
              id='dob--field'
              autocomplete='off'
            />
          </div>
          <button type='submit' class='btn btn--wide btn--auth--solid sb mg-half'>
            UPDATE
          </button>
        </form>
      </div>
    </Fragment>
  );
}
