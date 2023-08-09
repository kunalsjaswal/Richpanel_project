import React from 'react'
import { LoginDiv } from './style'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
  return (
    <LoginDiv>
        <h3>Login to your Account</h3>
        

        <label className='labels'>Email</label><br />
        <input type="email" className='fields'/>
        <label className='labels'>Password</label><br />
        <input type="password" className='fields'/>
  
        <div className="remember">
          <input type="checkbox"/>
          <span>Remember Me</span>
        </div>
        
  
        <button>Login</button>
  
        <p>New to MyApp? <NavLink to="/">Sign Up</NavLink></p>
    </LoginDiv>
  )
}

export default LoginPage