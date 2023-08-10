import React, { useContext, useEffect, useState } from 'react'
import { PlanDiv } from './style'
import contextStore from '../../context/ContextFile'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const PlansPage = () => {

    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            seterrorMessage({status:true,color:"red",message:"Login first"})
            navigate('/login',{replace:true})
        }

        setPlanSelected(-1)
    },[])

    const {plans, subPeriod, setSubPeriod,planSelected,setProduct,setPlanSelected,setIsLoading,seterrorMessage} = useContext(contextStore)
    
    // some js functionality
    const onPlanSelectHandler=(indx)=>{
        for (let index = 0; index < 4; index++) {
            document.getElementById(`plan-type-${index}`).style.opacity = 0.6;
            document.getElementById(`plan-type-${index}`).style.color = "#272626";   
            document.getElementById(`border-${index}`).style.visibility= "hidden";   
        }

        setPlanSelected(indx)  
        document.getElementById(`plan-type-${indx}`).style.opacity = 1;
        document.getElementById(`plan-type-${indx}`).style.color = "rgb(27, 93, 169)";
        document.getElementById(`border-${indx}`).style.visibility= "visible"; 

    }

    const [localError, setlocalError] = useState(false)

   
    const onNexthandler=()=>{
        if(planSelected === -1){
            setlocalError(true)
            return;
        }
        setlocalError(false)
        const date = Date()
        setProduct({
            name:plans[planSelected].type,
            price:plans[planSelected].price * (subPeriod?10:1),
            date: date,
        })
        navigate("/payment-gateway", {replace:true})


    }
    const onLogoutHandler=()=>{
        setIsLoading(true)
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        seterrorMessage({status:true,color:"green",message:"Logged out successfully"})
        setIsLoading(false)
        navigate("/login", {replace:true})
    }

  return (
    <PlanDiv data-aos="fade-up">
        <button onClick={onLogoutHandler} className="logout">Logout</button>
        <h1>Choose the right plan for you</h1>

        <section className="grid-box">

            {/* type of and details box  */}
            <div className="details">
                <div className="time-period">
                    <button onClick={()=>setSubPeriod(false)}
                        style={{
                            background:subPeriod?"transparent":"white", 
                            color:subPeriod?"white":"rgb(27, 93, 169)",
                        }}
                    >Monthly</button>
                    <button onClick={()=>setSubPeriod(true)} 
                        style={{
                            background:subPeriod?"white":"transparent", 
                            color:subPeriod?"rgb(27, 93, 169)":"white",
                        }}
                    >Yearly</button>
                </div>
                <div className="price subs" >Monthly Price</div>
                <div className="quality subs" style={{borderTop: "1px solid gray"}}>Video quality</div>
                <div className="res subs">Resolution</div>
                <div className="device subs">Device you can use to watch</div>
            </div>

            {/* type of plan using array*/}
            {plans.map((val,indx)=>(
                <div className="plan-type" id={`plan-type-${indx}`} onClick={()=>onPlanSelectHandler(indx)} key={indx}>
                    <div className="name">{val.type}</div>
                    <div className="triangle" id={`border-${indx}`}></div>
                    <div className="price">₹ {val.price * (subPeriod?10:1)}</div>
                    <div className="quality" style={{borderTop: "1px solid gray"}}>{val.video}</div>
                    <div className="res">{val.res}</div>
                    <div className="devices">
                        {val.devices.map(device=>(
                            <div className='d-type'>{device}</div>
                        ))}
                    </div>

                </div>
            ))}
            
        </section>
        {
            localError && 
            <div className="error">
                Please select a plan
            </div>
        }
        <button 
            onClick={onNexthandler}
            className='next-btn'>Next</button>
    </PlanDiv>
  )
}

export default PlansPage