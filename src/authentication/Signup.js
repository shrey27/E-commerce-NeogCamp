import './authentication.css';
import Navbar from '../common/navbar';
import Footer from '../common/footer';

export default function Signup() {
  return (
    <>
      <Navbar noDrawer={true} />
      <div class='card authentication shdw'>
        <h1 class='lg sb cen xs-s mg-full'>LOGIN</h1>
        <hr />
        <form action='#' class='sm-s'>
          <div class='authentication__input'>
            <label for='email__signup' class='label'>
              Enter Your Email ID
            </label>
            <input
              class='input sm-s'
              type='email'
              name='email__signup'
              id='email__signup'
              placeholder='Enter Email'
              autoComplete='off'
              required
            />
          </div>
          <div class='authentication__input'>
            <label for='password__signup' class='label'>
              Enter Password
            </label>
            <input
              class='input sm-s'
              type='password'
              name='password__signup'
              id='password__signup'
              autocomplete='off'
              placeholder='Enter Password'
              required
            />
          </div>
          <div class='authentication__input'>
            <label for='cnf__password__signup' class='label'>
              Confirm Password
            </label>
            <input
              class='input sm-s'
              type='password'
              name='cnf__password__signup'
              id='cnf__password__signup'
              autocomplete='off'
              placeholder='Re-enter Password'
              required
            />
          </div>
          <div class='flex-ct-ct signin__remember'>
            <input
              class='sm-s'
              type='checkbox'
              name='remember__signup'
              id='remember__signup'
            />
            <label for='remember__signup' class='label'>
              Remember me
            </label>
          </div>
          <button type='submit' class='btn btn--wide btn--auth--solid sb'>
            SIGN UP
          </button>
        </form>
        <div class='signin__links'>
          <a href='/' class='already sm'>
            Already have an account?
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
