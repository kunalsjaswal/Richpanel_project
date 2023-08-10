import React from 'react'
import { Outlet } from 'react-router-dom'
import { HomeDiv } from './style'
import AlertCard from '../alert/AlertCard'
import Loading from '../alert/Loading'

const HomePage = () => {
  return (
    <HomeDiv>
        <AlertCard/>
        <Outlet/>
    </HomeDiv>
  )
}

export default HomePage