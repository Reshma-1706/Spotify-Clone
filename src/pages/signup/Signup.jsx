import React from 'react';
import './signup.css';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="signupContainer">
      <h1>Sign up to<br />start listening</h1>

      <label htmlFor="email">Email address</label>
      <input type="email" id="email" placeholder="name@domain.com" />

      <a className="usePhone" href="#">Use phone number instead.</a>

      <button className="nextBtn">Next</button>

      {/* Divider with OR */}
      <div className="divider">
        <hr />
        <span>or</span>
        <hr />
      </div>

      <button className="signupBtn google">
        <FaGoogle className="icon" />
        Sign up with Google
      </button>

      <button className="signupBtn facebook">
        <FaFacebookF className="icon" />
        Sign up with Facebook
      </button>

      <button className="signupBtn apple">
        <FaApple className="icon" />
        Sign up with Apple
      </button>
    </div>
  );
};

export default SignUp;
