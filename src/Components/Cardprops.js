import React, { useState } from 'react'
import StudypropsCard from './StudypropsCard'

const Cardprops = () => {
    const [value, setvalue] = useState("props is working")
  return (
   
    <StudypropsCard test={value}/>
  )
}

export default Cardprops                                  