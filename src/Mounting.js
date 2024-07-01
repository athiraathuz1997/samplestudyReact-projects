import React, { useState } from 'react'
import Count from './Count'


const Mounting = () => {
    const [state,setState]=useState(false)
  return (
    <div>
        <h1 onClick={()=>setState(!state)}>show/hide</h1>
        {state && <Count></Count>}
    </div>
  )
}

export default Mounting