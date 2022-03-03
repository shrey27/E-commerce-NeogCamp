import './authentication.css';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
export default function Signin() {
  return (
    <>
      <Navbar noDrawer={true}/>
      <main>
        <div class='app--login shdw'>
          <h1 class='md sb cen mg-full'>LOGIN</h1>
          <hr />
          <form action='https://www.google.com' class='mg-full'>
            <div>
              <label for='user-name' class='label'>
                Username*
                <input
                  type='text'
                  placeholder='Enter Username'
                  class='input input--man'
                  id='user-name'
                  name='user-name'
                  required
                  autocomplete='off'
                />
                <span class='input--error mg-half'>
                  This field is mandatory
                </span>
              </label>
            </div>

            <div class='mg-half'>
              <label for='pswd' class='label'>
                Password*
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
              <span class='input--error mg-half'>This field is mandatory</span>
            </div>
            <div class='mg-full'>
              <label for='remember' class='sm'>
                <input
                  class='login__ip'
                  type='checkbox'
                  name='remember'
                  id='remember'
                />{' '}
                Remember Me
              </label>
            </div>
            <button type='submit' class='btn btn--wide btn--float sb'>
              Log In
            </button>
          </form>
          <a href='/' class='forgot sm'>
            Forgot Password?
          </a>
          <a href='/' class='forgot sm fl-rt'>
            Sign Up
          </a>
        </div>
        <div class='app--login shdw'>
          <h1 class='md sb cen sm-s'>FORGOT PASSWORD</h1>
          <hr />
          <p class='primary sm sb sm-s'>
            A temporary password has been sent to your email. Please enter that
            password in the current password field on{' '}
            <a href='../forgot/' class='forgot'>
              this
            </a>{' '}
            page.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
