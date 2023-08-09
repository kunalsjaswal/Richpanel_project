import React, { useState } from 'react'
import { PlanDiv } from './style'

const PlansPage = () => {

    const [btnActive, setbtnActive] = useState(false)
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

    const onPlanSelectHandler=(indx)=>{
        for (let index = 0; index < 4; index++) {
            document.getElementById(`plan-type-${index}`).style.opacity = 0.6;
            document.getElementById(`plan-type-${index}`).style.color = "#272626";   
            document.getElementById(`border-${index}`).style.visibility= "hidden";   
        }

        document.getElementById(`plan-type-${indx}`).style.opacity = 1;
        document.getElementById(`plan-type-${indx}`).style.color = "rgb(27, 93, 169)";
        document.getElementById(`border-${indx}`).style.visibility= "visible";   

    }

  return (
    <PlanDiv>
        <h1>Choose the right plan for you</h1>

        <section className="grid-box">

            {/* type of and details box  */}
            <div className="details">
                <div className="time-period">
                    <button onClick={()=>setbtnActive(false)}
                        style={{
                            background:btnActive?"transparent":"white", 
                            color:btnActive?"white":"rgb(27, 93, 169)",
                        }}
                    >Monthly</button>
                    <button onClick={()=>setbtnActive(true)} 
                        style={{
                            background:btnActive?"white":"transparent", 
                            color:btnActive?"rgb(27, 93, 169)":"white",
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
                    <div className="price">₹ {val.price * (btnActive?10:1)}</div>
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

        <button className='next-btn'>Next</button>
    </PlanDiv>
  )
}

export default PlansPage