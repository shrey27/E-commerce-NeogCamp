import './authentication.css';
import { Fragment } from 'react';

export default function ChangePassword() {
  return (
    <Fragment>
      <div class='card authentication shdw'>
        <h1 class='lg sb cen xs-s mg-full'>UPDATE PASSWORD</h1>
        <hr />
        <form action='#' class='sm-s'>
          <div class='authentication__input'>
            <label for='old__password__change' class='label'>
              Current Password
            </label>
            <input
              class='input sm-s'
              type='password'
              name='old__password__change'
              id='old__password__change'
              autocomplete='off'
              placeholder='Password'
              required
            />
          </div>
          <div class='authentication__input'>
            <label for='new__password__change' class='label'>
              New Password
            </label>
            <input
              class='input sm-s'
              type='password'
              name='new__password__change'
              id='new__password__change'
              autocomplete='off'
              placeholder='Password'
              required
            />
          </div>
          <div class='authentication__input'>
            <label for='cnf__password__change' class='label'>
              Confirm Password
            </label>
            <input
              class='input sm-s'
              type='password'
              name='cnf__password__change'
              id='cnf__password__change'
              autocomplete='off'
              placeholder='Password'
              required
            />
          </div>
          <button type='submit' class='btn btn--wide btn--auth--solid sb'>
            UPDATE
          </button>
        </form>
      </div>
    </Fragment>
  );
}
