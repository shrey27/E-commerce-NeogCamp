import './authentication.css';
import Navbar from '../common/navbar';
import Footer from '../common/footer';

export default function Signup() {
  return (
    <>
      <Navbar noDrawer={true} />
      <main>
      <div class="app--login shdw">
          <h1 class="md sb cen mg-full">SIGN UP</h1>
          <hr />
          <form action="https://www.google.com" class="mg-full">
            <div class="mg-half">
              <label for="user-name" class="label">
                Username*<input
                  type="text"
                  placeholder="Enter Username"
                  class="input input--man"
                  id="user-name"
                  name="user-name"
                  required
                  autocomplete="off"
                />
                <span class="input--error">This field is mandatory</span>
              </label>
            </div>

            <div class="mg-half">
              <label for="email" class="label">
                Email Id*<input
                  type="email"
                  placeholder="Enter Email Id"
                  class="input input--man"
                  id="email"
                  name="email"
                  required
                  autocomplete="off"
                />
                <span class="input--error">This field is mandatory</span>
              </label>
            </div>

            <div class="mg-half">
              <label for="pswd" class="label">
                Password*<input
                  type="password"
                  placeholder="Enter Password"
                  class="input input--man"
                  id="pswd"
                  name="password"
                  autocomplete="off"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
              </label>
              <span class="input--error">This field is mandatory</span>
            </div>

            <div class="mg-half">
              <label for="pswd-cnf" class="label">
                Confirm Password*<input
                  type="password"
                  placeholder="Enter Password Again"
                  class="input input--man"
                  id="pswd-cnf"
                  name="password-cnf"
                  autocomplete="off"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
              </label>
              <span class="input--error show--error"
                >This field is mandatory</span
              >
            </div>

            <button type="submit" class="btn btn--wide btn--float sb">
              Sign up
            </button>
          </form>
          <a href="/" class="already sm">Already have an account?</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
