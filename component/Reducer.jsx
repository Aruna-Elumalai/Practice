import React,{useReducer} from "react"



function arith(state,acti){
    if(acti.type=="increament")
        return{count:state.count+1};
    if(acti.type=="decrement")
        return{count:state.count-1};
    if(acti.type=="reset")
        return{count:0};

}

function Reducer(){

    
    const[state,dispatch]=useReducer(arith,{count:0})

    const handleadd=()=>{
        dispatch({type:"increament"})
    }
    const handlesub=()=>{
        dispatch({type:"decrement"})
    }
     const handlereset=()=>{
        dispatch({type:"reset"})
    }
    return(
        <div>
          <h2>count-{state.count}</h2>
          <button onClick={handleadd} >add</button>
          <button onClick={handlesub} >sub</button>
          <button onClick={handlereset} >reset</button>
        </div>
    )
}
export default Reducer