import React,{useState}from "react"
function ExaMple(){
    const[add,setadd]=useState(0)
    const make=(()=>{
    setadd(add+1)
    })
    return(
        <>
        <h1>calculating the total litres of petrol sold</h1>
        <h2>Total litres of petrol -{add} </h2>
        <button onClick={make}><p>Do you need petrol?</p> CLICK HERE</button>
        </>
    )
}
export default ExaMple


