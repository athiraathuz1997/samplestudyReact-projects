import React, { useState } from 'react'




const Section = () => {
  
  const [count,setcount] =useState(0)
  function add(){
    setcount(count+1)
  }
  function less(){
    setcount(count-1)
  }
  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={less}>-</button>
      <h1>counter:{count}</h1>
    </div>
  )
}

export default Section