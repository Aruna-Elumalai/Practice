import React,{useState,useEffect} from "react"
function PracTice(){
    const[demo,setdemo]=useState([])
    const[count,setcount]=useState(0)

const handlecount=()=>{
    setcount(count+1)
}

useEffect(()=>{
    handle()
},[count])
    const handle=async()=>{
        let a=await fetch("https://fakestoreapi.com/products")
        let b=await a.json()
        console.log(b)
        setdemo(b)
    }
   
    return(

        <div>
            <h2>count--{count}</h2>
            <button onClick={handlecount}>add</button>
<h2>example program for api calling</h2>
{demo.map((ch)=>(
    <div key={ch.id}>
       <img src={ch.image} height={200} width={200}/>
       <h2>{ch.title}</h2>
       <h2>{ch.price}</h2>
    </div>
))}
{/* <button onClick={handle}>click here to get api </button> */}

        </div>
    )
}
export default PracTice