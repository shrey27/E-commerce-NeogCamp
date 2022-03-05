import './authentication.css';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
export default function Signin() {
  return (
    <>
      <Navbar noDrawer={true} />
      <div class='card authentication shdw'>
        <h1 class='lg sb cen xs-s mg-full'>LOGIN</h1>
        <hr />
        <form action='#' class='sm-s'>
          <div class='authentication__input'>
            <label for='email__signin' class='label'>
              Enter Your Email ID
            </label>
            <input
              class='input sm-s'
              type='email'
              name='email__signin'
              id='email__signin'
              placeholder='Enter Email'
              autoComplete='off'
              required
            />
          </div>
          <div class='authentication__input'>
            <label for='password__signin' class='label'>
              Enter Password
            </label>
            <input
              class='input sm-s'
              type='password'
              name='password__signin'
              id='password__signin'
              autocomplete='off'
              placeholder='Password'
              required
            />
          </div>
          <div class='flex-ct-ct signin__remember'>
            <input
              class='sm-s'
              type='checkbox'
              name='remember__signin'
              id='remember__signin'
            />
            <label for='remember__signin' class='label'>
              Remember me
            </label>
          </div>
          <button type='submit' class='btn btn--wide btn--auth--solid sb'>
            LOGIN
          </button>
        </form>
        <div class='signin__links'>
          <a href='/' class='forgot sm'>
            Forgot Password?
          </a>
          <a href='/' class='forgot sm fl-rt'>
            Sign Up
          </a>
        </div>
      </div>
      <Footer fixed={true} />
    </>
  );
}
