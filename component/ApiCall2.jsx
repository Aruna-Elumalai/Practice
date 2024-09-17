import React,{useState} from "react"
function ApiCall2(){
    const[demo,setdemo]=useState([])


    const handle=async()=>{
        let a=await fetch("https://fakestoreapi.com/products")
        let b=await a.json()
        console.log(b)
        setdemo(b)
    }
   
    return(

        <div>
            <h1></h1>
<h2>example program for api calling</h2>
{demo.map((ch)=>(
    <div>
       <img src={ch.image} height={200} width={200}/>
       <h2>{ch.title}</h2>
       <h2>{ch.price}</h2>
    </div>
))}
<button onClick={handle}>click here to get api </button>

        </div>
    )
}
export default ApiCall2
