import React, { useEffect, useState } from 'react'

function Count(){
    const [count,setCount]=useState(0) 
    const [count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log("mounting");
        console.log("count1.."+count)
        console.log("count2.."+count2)

    },[count,count2])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount2(count2+1)}>Increment</button>
        <h1>{count2}</h1>
    </div>
  )
}

export default Count