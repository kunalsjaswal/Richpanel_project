import React, { useContext } from 'react'
import { PaymentDiv } from './style'
import contextStore from '../../context/ContextFile'
import { useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const PaymentPage = () => {

  const {seterrorMessage} = useContext(contextStore)
  const navigate = useNavigate()

  const publicKey = 'pk_test_51NdVmDSGH3cX0vfQtyKChGySfotLco794lFr80XzORfouABaSQl2ZOWxlkub96nm87D8yfvievAN48StqnOJE9LV00G0EbfxDK'
  const stripeTestPromise = loadStripe(publicKey)

  const onLogoutHandler=()=>{
    localStorage.removeItem("username")
    localStorage.removeItem("token")
    seterrorMessage({status:true,color:"green",message:"Logged out successfully"})
    navigate("/login", {replace:true})
  }

  return (
    <PaymentDiv>
        <button onClick={onLogoutHandler} className="logout">Logout</button>
        <Elements stripe={stripeTestPromise}>
          <PaymentForm/>
        </Elements>
    </PaymentDiv>
  )
}

export default PaymentPage