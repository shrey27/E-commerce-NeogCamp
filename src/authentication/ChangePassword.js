import './authentication.css';
import { Fragment } from 'react';

export default function ChangePassword() {
  return (
    <Fragment>
      <div class='app--login shdw'>
        <h1 class='md sb cen sm-s'>RESET PASSWORD</h1>
        <hr />
        <form action='../login/' class='mg-full'>
          <div class='mg-half'>
            <label for='pswd' class='label'>
              Current Password*
              <input
                type='password'
                placeholder='Enter Password'
                class='input input--man'
                id='pswd'
                name='password'
                autocomplete='off'
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                title='Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'
                required
              />
            </label>
            <p class='input--error'>This field is mandatory</p>
          </div>

          <div class='mg-half'>
            <label for='pswd' class='label'>
              New Password*
              <input
                type='password'
                placeholder='Enter Password'
                class='input input--man'
                id='pswd'
                name='password'
                autocomplete='off'
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                title='Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'
                required
              />
            </label>
            <p class='input--error'>This field is mandatory</p>
          </div>

          <div class='mg-half'>
            <label for='pswd' class='label'>
              {' '}
              Confirm New Password*{' '}
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              class='input input--man'
              id='pswd'
              name='password'
              autocomplete='off'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              title='Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'
              required
            />
            <p class='input--error'>This field is mandatory</p>
          </div>

          <button type='submit' class='btn btn--wide btn--float mg-full sb'>
            Set Password
          </button>
        </form>
      </div>
    </Fragment>
  );
}
