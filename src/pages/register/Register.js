import './register.css'
import React,{useRef} from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const navigate=useNavigate()

  const username=useRef()
  const email=useRef()
  const password=useRef()
  const passwordAgain=useRef()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(password.current.value!==passwordAgain.current.value){
      passwordAgain.current.setCustomValidity("password don't match")
    }else{
       const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
       }
       try {
          await axios.post('/auth/register',user)
          navigate('/login') 
       } catch (err) {
          alert(err)
       }
    }
  }
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Social Media</h3>
            <span className="loginDesc">Connect with friends and the world around you on Social Media</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit}>
                <input placeholder='Username' type="text" required className="loginInput" ref={username} />
                <input placeholder='Email' type="email" required className="loginInput" ref={email} />
                <input placeholder='Password' type="password" required minLength="6" className="loginInput" ref={password} />
                <input placeholder='Password Again' type="password" required minLength="6" className="loginInput" ref={passwordAgain} />
                <button className="loginButton" type='submit'>Login In</button>
                <button className="loginRegisterButton" onClick={()=>navigate('/login')}>Login into Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
