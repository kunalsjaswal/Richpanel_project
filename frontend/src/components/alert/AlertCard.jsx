import React, { useContext } from 'react'
import { AlertCardDiv } from './style'
import contextStore from '../../context/ContextFile'

const AlertCard = () => {
    const {errorMessage, seterrorMessage} = useContext(contextStore)

  return (
    <AlertCardDiv>
            {
                errorMessage.status && 
                <div style={{color:errorMessage.color, borderColor:errorMessage.color}} className="alert">
                    <span onClick={()=>seterrorMessage({status:false,color:"red",message:""})}>x</span>
                    {errorMessage.message}
                </div>
            }
            
    </AlertCardDiv>
  )
}

export default AlertCard