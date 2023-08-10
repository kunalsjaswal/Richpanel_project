import React, { useContext, useEffect, useState } from 'react'
import { PlanInfoDiv } from './style'
import { NavLink } from 'react-router-dom'
import contextStore from '../../context/ContextFile'

const PlanInfoPage = () => {

    const {subPeriod, plans, product,handleCancel,planSelected,getUserData, setIsLoading} = useContext(contextStore)
    const [active, setActive] = useState(true)
    useEffect(()=>{
        getUserData();
    },[])

    const handleCancelBtn = async(req,res)=>{
        setIsLoading(true)

        handleCancel()
        setActive(false)
        setIsLoading(false)

    }

  return (
    <PlanInfoDiv>
        <div className="card-head">
            <h3>Current Plan Details</h3>
            <div className="status" 
                style={{color: active?"#1881d6":"#d61818",backgroundColor:active?"#2f9df741":"#f72f2f41" }}
            >{active?'Active':'Cancelled'}
            </div>
            {active && 
                <button className="cancel" onClick={handleCancelBtn}>Cancel</button>
            }
        </div>

        <div className="card-body">
            <div className="type">{product.name}</div>
            <div className="devices">
                {plans[planSelected].devices.map((val,indx)=>(
                    <span key={indx}>{val} + </span>
                ))}
                <span>more</span>
            </div>
            <h1 className="pricing">
                ₹ {product.price}/{subPeriod?"Yr":"Mo"}
            </h1>
            <button className="change-plan">
                <NavLink to="/available-plans">Change Plan</NavLink>    
            </button>
        </div>

        <div className="card-footer">
            {active ?
                `Your subscription has started on ${product.date.substring(4,16)} and will auto renew on ${product.date.substring(4,10)}, 2024.`:
                ` your subscription was cancelled and you will loose access to services on ${product.date.substring(4,10)}, 2024.`
            }
            
        </div>
       
    </PlanInfoDiv>
  )
}

export default PlanInfoPage