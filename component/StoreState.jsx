import React,{useState} from "react"
function StoreState(){

    const[store,setstore]=useState("")

 const handlestate=(e)=>{
    setstore(e.target.value)
 }
    return(
        <div>
        <h2>Hello , store the input in the usestate </h2>
        <h2>UseState value--{store}</h2>
        <br></br>
        <input onChange={handlestate} placeholder="Enter your name"/>
        </div>
    )
}
export default StoreState