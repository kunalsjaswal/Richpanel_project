import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../login/Login'
import HomePage from '../home/HomePage'
import SignupPage from '../signup/SignupPage'
import NotFoundPage from '../NotFoundPage'
import PlansPage from '../subscription/PlansPage'
import PaymentPage from '../payment/PaymentPage'
import PlanInfoPage from '../plan/PlanInfoPage'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' Component={HomePage}>
            <Route index Component={SignupPage}/>
            <Route  path='login' Component={LoginPage}/>
        </Route>
        <Route path='available-plans' Component={PlansPage}/>
        <Route path='payment-gateway' Component={PaymentPage}/>
        <Route path='plan-info' Component={PlanInfoPage}/>
        <Route path='*' Component={NotFoundPage}/>

    </Routes>
  )
}

export default Routers