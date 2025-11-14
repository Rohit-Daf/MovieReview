import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const onLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    localStorage.removeItem('email')
    navigate('/login')
  }

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/home/allMovies" className="text-xl font-bold">Movie Reviews</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/home/allMovies" className="hover:text-gray-300">All Movies</Link>
            <Link to="/home/my-reviews" className="hover:text-gray-300">My Reviews</Link>
            <Link to="/home/shared-with-me" className="hover:text-gray-300">Shared With Me</Link>
            <Link to="/home/all-reviews" className="hover:text-gray-300">All Reviews</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/home/edit-profile" className="hover:text-gray-300">Edit Profile</Link>
            <Link to="/home/change-password" className="hover:text-gray-300">Change Password</Link>
            <button onClick={onLogout} className="hover:text-gray-300">Logout</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/home/allMovies" className="block hover:text-gray-300">All Movies</Link>
              <Link to="/home/my-reviews" className="block hover:text-gray-300">My Reviews</Link>
              <Link to="/home/shared-with-me" className="block hover:text-gray-300">Shared With Me</Link>
              <Link to="/home/all-reviews" className="block hover:text-gray-300">All Reviews</Link>
              <Link to="/home/edit-profile" className="block hover:text-gray-300">Edit Profile</Link>
              <Link to="/home/change-password" className="block hover:text-gray-300">Change Password</Link>
              <button onClick={onLogout} className="block hover:text-gray-300">Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
