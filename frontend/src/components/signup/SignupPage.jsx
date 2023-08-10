import React, { useContext, useEffect, useState } from 'react'
import { SignupDiv } from './style'
import { NavLink, useNavigate } from 'react-router-dom'
import contextStore from '../../context/ContextFile'


const SignupPage = () => {

  useEffect(()=>{
    if(localStorage.getItem('token')){
        navigate('/available-plans',{replace:true})
    }

},[])

  const {setIsLoading, seterrorMessage} = useContext(contextStore)
  const navigate = useNavigate()
  const [signupData, setSignupData] = useState({name:"",email:"",password:""})

  const handleSignup = async(ev)=>{
      // empty fields error  
    if(signupData.name.length===0 || signupData.email.length === 0 || signupData.password.length === 0){
        seterrorMessage({status:true,color:"red",message:"Fill all Fields!"})
        return;
      }

      ev.preventDefault();
      setIsLoading(true);

      const response = await fetch("https://subscriptionapi.onrender.com/user-registration",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({username:signupData.name, email:signupData.email,password:signupData.password})
      })

      const json = await response.json()
      if(json.status){
        setSignupData({name:"",email:"",password:""})
        seterrorMessage({status:true,color:"green",message:"Registered Successfully "})
        navigate('/login',{replace:true})
      }else{
        seterrorMessage({status:true,color:"red",message:json.error})
      }

      setIsLoading(false)
  }
  
  return (
    <SignupDiv data-aos="flip-left">
      
      <h3>Create Account</h3>
        

      <label className='labels'>Name</label> <br />
      <input type="text" 
        className='fields' 
        placeholder='abc..'
        onChange={ev=>setSignupData({...signupData,name:ev.target.value})}/>
      <label className='labels'>Email</label><br />
      <input type="email" 
        className='fields'
        placeholder='abc@gmail.com'
        onChange={ev=>setSignupData({...signupData,email:ev.target.value})}
        />
      <label className='labels'>Password</label><br />
      <input type="password" 
        className='fields'
        placeholder='********'
        onChange={ev=>setSignupData({...signupData,password:ev.target.value})}
      />

      <div className="remember">
        <input type="checkbox"/>
        <span>Remember Me</span>
      </div>
      

      <button onClick={handleSignup}>Sign Up</button>

      <p>Already have an account?  <NavLink to="/login">Login</NavLink></p>
    </SignupDiv>
  )
}

export default SignupPage