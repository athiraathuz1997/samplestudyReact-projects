import React, { useState } from 'react'
import Tablelist from './Tablelist'

const ShowHideButton = () => {
    const[show,setshow] = useState(true)
 const hide=()=>{
    setshow((e)=>!e)
 }
  return (
    <div>
        {show===true?<Tablelist/>:"empty page"}
<button onClick={hide} className={show===true?"btn btn-danger":"btn btn-success"}>{show===true?"hide":"show"}</button>
    </div>
  )
}

export default ShowHideButton