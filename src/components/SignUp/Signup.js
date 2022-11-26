import React from 'react'
import { Link  } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="login">
     
    <div className="container">
      <form  >
        <h1>Sign Up</h1>
        <input   type="email" placeholder="Email or phone number" />
        <input   type="password" placeholder="Password" />
        <button className="loginButton">Sign Up</button>
        <span>
          already have an account? 
          <Link to='/login'>
          <b>Sign In now.</b>
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

export default Signup