import React from 'react'
import {Link} from 'react-router-dom';
import './login.css';

const Login = () => {
  

  return (
    <div className="login">
     
      <div className="container">

        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix?
            <Link to='/signup'>
            <b>Sign up now.</b>
            </Link>
          
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login