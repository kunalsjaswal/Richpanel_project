import React from 'react'
import load from '../../ZKZg.gif'

const Loading = () => {
    const styling={
        position:"fixed",
        width:"100%",
        zIndex:"10",
        textAlign:"center",
    }
  return (
    <div style={styling}>
            <img src={load} style={{width:"5%", marginTop:"5%"}} alt="loading..." />
            <div style={{fontWeight:"bold"}}>Processing</div>
    </div>
  )
}

export default Loading