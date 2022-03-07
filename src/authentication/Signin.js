import './authentication.css';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
export default function Signin() {
  return (
    <>
      <Navbar noDrawer={true} />
      <div className='card authentication shdw'>
        <h1 className='lg sb cen xs-s mg-full'>LOGIN</h1>
        <hr />
        <form action='#' className='sm-s'>
          <div className='authentication__input'>
            <label for='email__signin' className='label'>
              Enter Your Email ID
            </label>
            <input
              className='input sm-s'
              type='email'
              name='email__signin'
              id='email__signin'
              placeholder='Enter Email'
              autoComplete='off'
              required
            />
          </div>
          <div className='authentication__input'>
            <label for='password__signin' className='label'>
              Enter Password
            </label>
            <input
              className='input sm-s'
              type='password'
              name='password__signin'
              id='password__signin'
              autocomplete='off'
              placeholder='Password'
              required
            />
          </div>
          <div className='flex-ct-ct signin__remember'>
            <input
              className='sm-s'
              type='checkbox'
              name='remember__signin'
              id='remember__signin'
            />
            <label for='remember__signin' className='label'>
              Remember me
            </label>
          </div>
          <button type='submit' className='btn btn--wide btn--auth--solid sb'>
            LOGIN
          </button>
        </form>
        <div className='signin__links'>
          <a href='/' className='forgot sm'>
            Forgot Password?
          </a>
          <a href='/' className='forgot sm fl-rt'>
            Sign Up
          </a>
        </div>
      </div>
      <Footer fixed={true} />
    </>
  );
}
