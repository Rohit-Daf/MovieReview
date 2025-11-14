import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import Register from '../Pages/Register/Register'


function App() {


  return (
    <Routes>
      <Route path="/"
        element={<Navigate to='/login' />} />

      <Route
        path='login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Register />}
      />
      <Route
        path='home/allMovies'
        element={<Home />}
      />



    </Routes>

  )
}

export default App
