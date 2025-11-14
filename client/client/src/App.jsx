import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import Register from '../Pages/Register/Register'
import MyReviews from '../Pages/MyReviews/MyReviews'
import SharedWithMe from '../Pages/SharedWithMe/SharedWithMe'
import EditProfile from '../Pages/EditProfile/EditProfile'
import AllMovies from '../Pages/AllMovies/AllMovies'
import AllReviews from '../Pages/AllReviews/AllReviews'


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
        path='home'
        element={<AllMovies />}
      />
      <Route
        path='home/allMovies'
        element={<AllMovies />}
      />
      <Route
        path='home/my-reviews'
        element={<MyReviews />}
      />
      <Route
        path='home/shared-with-me'
        element={<SharedWithMe />}
      />

      <Route
        path='home/all-reviews'
        element={<AllReviews />}
      />
      <Route
        path='/home/edit-profile'
        element={<EditProfile />}
      />
    </Routes>


  )
}

export default App
