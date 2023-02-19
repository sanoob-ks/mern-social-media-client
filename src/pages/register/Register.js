import './register.css'
import React from "react"

function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Social Media</h3>
            <span className="loginDesc">Connect with friends and the world around you on Social Media</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
            <input placeholder='Username' type="text" className="loginInput" />
                <input placeholder='Email' type="email" className="loginInput" />
                <input placeholder='Password' type="password" className="loginInput" />
                <input placeholder='Password Again' type="password" className="loginInput" />
                <button className="loginButton">Login In</button>
                <button className="loginRegisterButton">Login into Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
