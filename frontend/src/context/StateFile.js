import React, { useState } from 'react'
import contextStore from './ContextFile'

const StateFile = (props) => {

    // subscription period
    // false = monthly(default)
    // true = yearly
    const [subPeriod, setSubPeriod] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, seterrorMessage] = useState({status:false,color:"red",message:""})
    // which plan is selected 
    // 0 - mobile, 1 - basic, 2 - standard, 3 - premium
    const [planSelected, setPlanSelected] = useState(-1)
    const plans=[
        {
            type:"Mobile",
            price:100,
            video:"Good",
            res:"480p",
            devices:["Phone","Tablet"]

        },
        {
            type:"Basic",
            price:200,
            video:"Good",
            res:"720p",
            devices:["Phone","Tablet","Computer","TV"]
        },
        {
            type:"Standard",
            price:500,
            video:"Better",
            res:"1080p",
            devices:["Phone","Tablet","Computer","TV"]
        },
        {
            type:"Premium",
            price:700,
            video:"Best",
            res:"4K+HDR",
            devices:["Phone","Tablet","Computer","TV"]
        }
    ]

    // current plan info 
    const [product,setProduct] = useState({})
    
    const getUserData = async()=>{
        setIsLoading(true)
        const response = await fetch(`https://subscriptionapi.onrender.com/getuserData/${localStorage.getItem("token")}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
        })

        const json = await response.json();
        const {date,price,type,time,plan} = json
        
        setProduct({name:type,price:price,date:date});
        setPlanSelected(plan)
        if(time === 'Yearly') setSubPeriod(true)      
        
        setIsLoading(false)


    }
    const handleSetActive = async()=>{
        setIsLoading(true)
        const response = await fetch(`https://subscriptionapi.onrender.com/activate-subscription/${localStorage.getItem("token")}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({date:product.date,price:product.price,type:product.name,time:subPeriod?"Yearly":"Monthly",plan:planSelected})
        })
        const json = await response.json();
        // setPlanSelected()
        setIsLoading(false)

    }

    const handleCancel = async()=>{
        setIsLoading(true)

        const response = await fetch(`https://subscriptionapi.onrender.com/cancel-subscription/${localStorage.getItem("token")}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
        })
        const json = await response.json();
        setIsLoading(false)

    }
    
    
    
    return (
        <contextStore.Provider 
            value={{
                plans,
                subPeriod, setSubPeriod,
                isLoading, setIsLoading,
                errorMessage, seterrorMessage,
                planSelected, setPlanSelected,
                product,setProduct,
                handleSetActive,handleCancel,
                getUserData
            }}>
        {props.children}
        </contextStore.Provider>
    )
}

export default StateFile