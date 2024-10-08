import React,{useState} from "react"
import "./BirthDay.css"
function BirthDay(){
    const[hbd,sethbd]=useState([
        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
      ])
      const handleclear=()=>{
        sethbd([])
      }
    return(
        <div className="colo">
        <div class name="cl">
         <h2> Birthday List</h2>
         <h3>{hbd.length} members birthday today</h3>
        
       {hbd.map((da)=>(
          <div>
            <img src={da.image} className="ima"/>
            <div>
            <span className="pos">{da.name}</span><br></br>
            <span className="pos">{da.age}</span>
            </div>
            </div>
       ))}
        
         <button onClick={handleclear}>clear all</button>
        </div>
        </div>
    )
}
export default BirthDay