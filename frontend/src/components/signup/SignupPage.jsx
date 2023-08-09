import React from 'react'
import { SignupDiv } from './style'
import { NavLink } from 'react-router-dom'

const SignupPage = () => {
  return (
    <SignupDiv>
      <h3>Create Account</h3>
        

      <label className='labels'>Name</label> <br />
      <input type="text" className='fields'/>
      <label className='labels'>Email</label><br />
      <input type="email" className='fields'/>
      <label className='labels'>Password</label><br />
      <input type="password" className='fields'/>

      <div className="remember">
        <input type="checkbox"/>
        <span>Remember Me</span>
      </div>
      

      <button>Sign Up</button>

      <p>Already have an account?  <NavLink to="/login">Login</NavLink></p>
    </SignupDiv>
  )
}

export default SignupPage