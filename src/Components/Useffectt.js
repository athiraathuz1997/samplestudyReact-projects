import React, { useEffect, useState } from 'react'

const Useffectt = () => {
    
    const [name, Setname] = useState("hello");
    useEffect(() => {
        alert("hello world")
      }, [name])
    // function clickbutton(){
    //     Setname("world")
    // }
  return (
    <div>
    <h1>{name}</h1> 
    <button onClick={()=>Setname("world")}>click</button>
    </div>
  )
}

export default Useffectt