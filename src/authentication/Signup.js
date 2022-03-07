import './authentication.css';
import Navbar from '../common/navbar';
import Footer from '../common/footer';

export default function Signup() {
  return (
    <>
      <Navbar noDrawer={true} />
      <div className='card authentication shdw'>
        <h1 className='lg sb cen xs-s mg-full'>SIGN UP</h1>
        <hr />
        <form action='#' className='sm-s'>
          <div className='authentication__input'>
            <label for='email__signup' className='label'>
              Enter Your Email ID
            </label>
            <input
              className='input sm-s'
              type='email'
              name='email__signup'
              id='email__signup'
              placeholder='Enter Email'
              autoComplete='off'
              required
            />
          </div>
          <div className='authentication__input'>
            <label for='password__signup' className='label'>
              Enter Password
            </label>
            <input
              className='input sm-s'
              type='password'
              name='password__signup'
              id='password__signup'
              autocomplete='off'
              placeholder='Enter Password'
              required
            />
          </div>
          <div className='authentication__input'>
            <label for='cnf__password__signup' className='label'>
              Confirm Password
            </label>
            <input
              className='input sm-s'
              type='password'
              name='cnf__password__signup'
              id='cnf__password__signup'
              autocomplete='off'
              placeholder='Re-enter Password'
              required
            />
          </div>
          <div className='flex-ct-ct signin__remember'>
            <input
              className='sm-s'
              type='checkbox'
              name='remember__signup'
              id='remember__signup'
            />
            <label for='remember__signup' className='label'>
              Remember me
            </label>
          </div>
          <button type='submit' className='btn btn--wide btn--auth--solid sb'>
            SIGN UP
          </button>
        </form>
        <div className='signin__links'>
          <a href='/' className='already sm'>
            Already have an account?
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
