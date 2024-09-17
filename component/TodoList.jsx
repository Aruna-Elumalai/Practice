import React,{useState} from "react"
import { useEffect } from "react"
function TodoList(){


    const[data,setdata]=useState([])


    const calling =async()=>{
        let a=await fetch("http://localhost:3000/todoList")
        let b=await a.json()
        setdata(b)
    }

    useEffect(()=>{
        calling()
    },[])



    return(
        <div>
            <h1>GROCERY LIST</h1>
            <input placeholder="Enter your groceries"></input>
            <button>ADD TO CART</button>
            {data.map((da,i)=>(
                <h2>{i+1}.{da.grocery}</h2>
            ))}
        </div>
    )
}
export default TodoList

// http://localhost:3000/todoList
