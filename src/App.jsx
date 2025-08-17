import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layoutsone from './LayoutOne/Layoutsone'
import Home from './assets/Pages/Home'

const App = () => {
  
  const myRoute = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layoutsone/>}>
      <Route index element={<Home/>}/>
    </Route>
  ))
  
  
  
  
  
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>

  )
}

export default App