import React, { useEffect, useState } from 'react'
import axios from "axios"
const Apiintegration = () => {
  const [product, setproduct] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res)=> setproduct(res.data.products));
    }, [])
    console.log(product);
  return (
    <div>
       {
        product.map((item)=>{
          return<div>
            <h3>brand:{item.brand}</h3>
            <h3>title:{item.title}</h3>

          </div>
        })
       }
        
    </div>
  )
}

export default Apiintegration