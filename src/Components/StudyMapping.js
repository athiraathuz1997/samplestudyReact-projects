import React from 'react'

const StudyMapping = () => {
    let objectArray=[
        {name:"anu", age:12,place:"tvm"},
        {name:"meenu", age:15,place:"tvm"},
        {name:"rithu", age:1,place:"tvm"},
        {name:"devu", age:2,place:"tvm"}
    ]
  return (
   
    <div>
{
    objectArray.map((item)=>{
        return(
            <div>
                <p>name:{item.name} , age:{item.age}</p> 
            </div>
        )
    })
    }
    </div>
  )
}

export default StudyMapping