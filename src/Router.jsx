import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'

export default function Router() {
  return (
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path='/category/:name' element={<Category/>} /> 

    </Routes>
  )
}
