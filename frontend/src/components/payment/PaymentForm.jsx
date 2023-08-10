import React, { useContext, useEffect, useState } from 'react'
import { CardElement,useElements,useStripe } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import { FormDiv } from './style'
import contextStore from '../../context/ContextFile'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#7f7f7f",
			color: "#010101",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#363636" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#240205"
		}
	}
}
const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()

    const {subPeriod , product, setIsLoading, handleSetActive } = useContext(contextStore)

    useEffect(()=>{
        if(!product.name){
            navigate('/available-plans',{replace:true})
        }
    },[])


    const handleSubmit=async(e)=>{
        e.preventDefault();
        setIsLoading(true)

        const{error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await fetch("https://subscriptionapi.onrender.com/payment-gateway",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({product:product, id:id})
                })
                

                const json = await response.json();
                if(json.status){

                    // TODO: setting some states later about payment
                    handleSetActive()
                    navigate('/plan-info',{replace:true})
                }
                
            } catch (error) {
                console.log(error.message)
            }

        }else{
            console.log(error.message)
        }
        setIsLoading(false)
    }

  return (
    <FormDiv>
        <form onSubmit={handleSubmit}>
            <h1>Complete Payment</h1>
            <h5>Enter your credit or debit card details below</h5>
            <fieldset>
                <div className="formRow">
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button>Confirm Payment</button>
        </form>

        <div className="plan-info">
            <h2>Order Summary</h2>
            <div className='types'><span>Plan name</span>  <span className='adj-right'>{product.name}</span></div>
            <hr />
            <div className='types'><span>Billing cycle</span>  <span className='adj-right'>{subPeriod?"Yearly":"Monthly"}</span></div>
            <hr />
            <div className='types'><span>Plan price</span>  <span className='adj-right'>₹ {product.price}/{subPeriod?"Yr":"Mo"}</span></div>
            <hr />

        </div>
    </FormDiv>
  )
}

export default PaymentForm