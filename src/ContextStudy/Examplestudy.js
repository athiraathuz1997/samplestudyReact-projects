import React, { useContext } from 'react'
import { sampleContextt } from "../ContextStudy/ContextMain"

const Examplestudy = () => {
    const demo = useContext(sampleContextt)
    const {name,Setname} = demo
    console.log(name)
    const changename=()=>{
        Setname("rahul")
    }
  return (
    <div>
        <p>{demo.name}</p>
        <button onClick={changename}>change name</button>
    </div>
  )
}

export default Examplestudy