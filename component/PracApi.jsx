import React,{useState} from "react"
function PracApi(){
 const[call,setcall]=useState([])

const apicall=async()=>{
    let a=await fetch("https://fakestoreapi.com/products")
    let b=await a.json()
    console.log(b)
    setcall(b)
}   
    return(
        <div>
            <h2>api calling</h2>
        {call.map((ch)=>{
            <div>
            {ch.title}
            {ch.price}
            <img src={ch.image} hight={200} width={200}/>
            </div>
        })}
        <h1>hello aruna</h1>
        <button onClick={apicall}>call here</button>
        </div>
    )
}
export default PracApi