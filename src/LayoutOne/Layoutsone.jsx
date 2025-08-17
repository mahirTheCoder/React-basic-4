import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const Layoutsone = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
  
    </>
  )
}

export default Layoutsone