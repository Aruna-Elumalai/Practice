import React,{useState} from "react"
function UnMount(){
    const[mount,setmount]=useState(0)


  const hand=()=>{
    setmount(mount+1)
  }
    return(
        <>
        <h1>aruna-{mount}</h1>
        <button onClick={hand}>click to add</button>
        </>
    )
}
export default UnMount