import React, { useContext, useEffect, useState } from 'react'
import { LoginDiv } from './style'
import { NavLink, useNavigate } from 'react-router-dom'
import contextStore from '../../context/ContextFile'

const LoginPage = () => {

  useEffect(()=>{
    if(localStorage.getItem('token')){
        navigate('/available-plans',{replace:true})
    }

},[])

  const {seterrorMessage, setIsLoading}=useContext(contextStore)
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({email:"",password:""})

  const handleLogin=async(ev)=>{

    if(loginData.email.length === 0 || loginData.password.length === 0){
        seterrorMessage({status:true,color:"red",message:"Fill all Fields!"})
        return;
    }

    ev.preventDefault();
    setIsLoading(true);

    const response  = await fetch("http://localhost:5000/user-login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({email:loginData.email, password:loginData.password})
    })

    const json = await response.json()

    if(json.status){
      seterrorMessage({status:false})
      setLoginData({email:"",password:""})

      localStorage.setItem('username',json.token.username)
      localStorage.setItem('token',json.token.id)

      if(json.token.status){
        navigate('/plan-info',{replace:true})
      }else{
        navigate('/available-plans',{replace:true})
      }
    }else{
      seterrorMessage({status:true,color:"red",message:json.error})
    }

    setIsLoading(false)
  }

  return (
    <LoginDiv data-aos="flip-right">

        <h3>Login to your Account</h3>
        

        <label className='labels'>Email</label><br />
        <input type="email" 
          className='fields'
          placeholder='abc@gmail.com'
          onChange={ev=>setLoginData({...loginData,email:ev.target.value})}
        />
        <label className='labels'>Password</label><br />
        <input type="password" 
          className='fields'
          placeholder='Enter password'
          onChange={ev=>setLoginData({...loginData,password:ev.target.value})}
        />
  
        <div className="remember">
          <input type="checkbox"/>
          <span>Remember Me</span>
        </div>
        
  
        <button onClick={handleLogin}>Login</button>
  
        <p>New to MyApp? <NavLink to="/">Sign Up</NavLink></p>
    </LoginDiv>
  )
}

export default LoginPage