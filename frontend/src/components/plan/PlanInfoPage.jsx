import React from 'react'
import { PlanInfoDiv } from './style'
import { NavLink } from 'react-router-dom'

const PlanInfoPage = () => {
  return (
    <PlanInfoDiv>
        <div className="card-head">
            <h3>Current Plan Details</h3>
            <div className="status">Active</div>
            <button className="cancel">Cancel</button>
        </div>

        <div className="card-body">
            <div className="type">Basic</div>
            <div className="devices">Phone + Tablet + Computer + TV</div>
            <h1 className="pricing">
                ₹ 2000/yr
            </h1>
            <button className="change-plan">
                <NavLink to="/available-plans">Change Plan</NavLink>    
            </button>
        </div>

        <div className="card-footer">
            Your subscription has started on Jul 11th, 2022 ans will auto renew on Jul 12th, 2023.
        </div>
        {/* your subscription was cancelled and you will loose access to services on Jul 11th, 2023. */}
    </PlanInfoDiv>
  )
}

export default PlanInfoPage