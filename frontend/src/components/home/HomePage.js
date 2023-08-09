import React from 'react'
import { Outlet } from 'react-router-dom'
import { HomeDiv } from './style'

const HomePage = () => {
  return (
    <HomeDiv>
        <Outlet/>
    </HomeDiv>
  )
}

export default HomePage