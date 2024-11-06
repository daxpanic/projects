import React, { useState } from 'react'
import './Login.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {

  const [action, setAction] = useState('');

  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction(``);
  };

  const forgotPassword = () => {
    setAction(``);
  }

  return (
    <div className={`wrapper ${action}`}>
      <div className='form-box login'>
        <form action="">
          <h1>Login</h1>
          <div className="input">
            <input type="text" name="Username"
              placeholder='Username' required />
            <FaUser className='icon' />
          </div>

          <div className="input">
            <input type="password" name="Password"
              placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#" onClick={forgotPassword}>Forgot password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
            <p>Don't have and account? <a href="#" onClick=
              {registerLink}>Register</a></p>
          </div>

        </form>
      </div>

      <div className='form-box register'>
        <form action="">
          <h1>Registration</h1>
          <div className="input">
            <input type="text" name="Username"
              placeholder='Username' required />
            <FaUser className='icon' />
          </div>

          <div className="input">
            <input type="email" name="Email"
              placeholder='Email' required />
            <FaEnvelope className='icon' />
          </div>

          <div className="input">
            <input type="password" name="Password"
              placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <div className="input">
            <input type="password" name="Confirm password"
              placeholder='Confirm password' required />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />I agree to Terms and Conditions</label>
          </div>

          <button type='submit'>Register</button>

          <div className="register-link">
            <p>Already have an account? <a href="#" onClick=
              {loginLink}>Login</a></p>
          </div>

        </form>
      </div>

      <div className='form-box forgotPassword'>
        <form action="">
          <h1>Recovery</h1>
          <div className="input">
            <input type="text" name="Email"
              placeholder='Email' required />
            <FaEnvelope className='icon' />
          </div>
          <button type='submit'>Submit</button>
          <div className="login-link">
            <p>Remembered your password? <a href="#" onClick=
              {loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login