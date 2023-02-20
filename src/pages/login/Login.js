import './login.css'
import React, { useContext,useRef } from "react"

import {loginCall} from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext' 
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  const email=useRef()
  const password=useRef()
  const {user,isFetching,error,dispatch}=useContext(AuthContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    loginCall({
      email:email.current.value,
      password:password.current.value
      },
      dispatch)
  }
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Social Media</h3>
            <span className="loginDesc">Connect with friends and the world around you on Social Media</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit} >
                <input placeholder='Email'required type="email" className="loginInput" ref={email} />
                <input placeholder='password' required minLength="6" type="password" className="loginInput" ref={password}/>
                <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ? <CircularProgress size="1.5rem"  sx={{color:'white'}}/> : "Login In"}</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton" onClick={()=>navigate('/register')} disabled={isFetching}>{isFetching ? <CircularProgress size="1.5rem"  sx={{color:'white'}}/> : "Create a New Account"}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
