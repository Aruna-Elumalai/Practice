// import React,{useState}from "react"
// import DescRiption from "../component/DescRiption"
// import ExaMple from "../component/ExaMple"
// import ApiCall from "../component/ApiCall"
// import PracTice from "../component/PracTice"
// import PracApi from "../component/PracApi"
// import UnMount from "../component/UnMount"

// function App() {
//   const[islog,setislog]=useState(false)

// const lo=()=>{
//   setislog(true)
// }
// return (
// <div>
//  {/* <ExaMple></ExaMple> */}
// {/* <DescRiption></DescRiption> */}
// {/* <ApiCall></ApiCall> */}
// {/* <PracTice></PracTice> */}
// {/* <PracApi></PracApi> */}

// {islog ? null :<UnMount/>}
// <UnMount></UnMount>
// <br></br><br></br>
// <button onClick={lo}>logout</button>
// </div>
    
//   )
// }

// export default App

// import React from "react"
// import StoreState from "../component/StoreState"
// import ApiCall from "../component/ApiCall"
// import ApiCall2 from "../component/ApiCall2"
// import HomePage from "../component/NewWeb.jsx/HomePage"
// import ProductsPage from "../component/NewWeb.jsx/ProductsPage"
// import AboutPage from "../component/NewWeb.jsx/AboutPage"
// import {BrowserRouter,Routes,Route,Link} from"react-router-dom"
// function App(){
//   return(
//     <BrowserRouter>
//     {/* <a>HomePage</a>
//   <a>ProductsPage</a>
//   <a>AboutPage</a> */}
//   <Link to="/">Homepage</Link>
//   <Link to="/product">ProductsPage</Link>
//   <Link to="/about">AboutPage</Link>
// <Routes>
  
// <Route path="/"        element={<HomePage/>}/>
// <Route path="/product" element={<ProductsPage/>}/>
// <Route path="/about"   element={<AboutPage/>}/>
// </Routes>
// </BrowserRouter>
//   )
// }
// export default App
import React from "react"
import TodoList from "../component/TodoList"
import TodoList1 from "../component/TodoList1"
import Reducer from "../component/Reducer"
import ExaMple from "../component/ExaMple"

function App(){
  return(
    <div>
  {/* <TodoList/> */}
  {/* <TodoList1/> */}
  {/* <Reducer/> */}
  <ExaMple/>
    </div>
  )
}
export default App













