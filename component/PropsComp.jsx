import React,{useState} from "react"
function PropsComp({names}){
    const[data,setdata] = useState(names)
    return(
        <div>
          <h2>heloooo...</h2>
          {data.map((d)=>(
            <h1>{d}</h1>
          ))}
        </div>
    )
}
export default PropsComp