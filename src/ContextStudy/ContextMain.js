import React, { createContext, useState } from 'react'
import Examplestudy from './Examplestudy';
const sampleContextt=createContext();
const ContextMain = () => {
    const [value,Setvalue]=useState(25);
    const [name,Setname]=useState("rahil");
    
    console.log(name)
    return (
    <div>
        <sampleContextt.Provider value={{value,name,Setname}}>
            <Examplestudy/>
        </sampleContextt.Provider>
    </div>
  )
}

export default ContextMain
export {sampleContextt};