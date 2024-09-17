import React,{useState} from "react"
import { useEffect } from "react"
import { TiEdit } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";
function TodoList1(){

    const[data,setdata]=useState([])

    const callapi = async ()=>{
        let a= await fetch("http://localhost:3000/todoList")
        let b=await a.json()
        setdata(b)
    }
    useEffect(()=>{
        callapi()
    },[])


return(
        <div>
         <h2>GROCERY LIST</h2>
         <input placeholder="type grocery"/>
         <button>cart</button>
         <ol>
         {data.map((da,i)=>(
            <div className="da">
            <h2>{i+1}.{da.grocery}
            <span><TiEdit /> </span>
            <span><AiOutlineDelete /></span></h2>
                 
                </div>
        
         
         ))}
          </ol>
        </div>
    )
}
export default TodoList1