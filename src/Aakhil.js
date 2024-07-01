import React, { useEffect, useState } from 'react'

function Aakhil () {
  // useEffect(()=>{
  //   console.log("mounting");
  //   return()=>{
  //     console.log("unmounting");
  //   }
  // },[])
    const [state,setstate]=useState(0)
    console.log("data");
  return (
    <div>
        
        <button onClick={()=>setstate(state+1)}>ADD</button>
       
 </div>
  )
}

export default Aakhil
