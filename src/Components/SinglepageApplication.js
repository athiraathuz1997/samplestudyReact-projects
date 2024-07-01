import React from 'react';


import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Header from './Header';



const SinglepageApplication = () => {
  return (
    <div><BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter></div>
  )
}

export default SinglepageApplication