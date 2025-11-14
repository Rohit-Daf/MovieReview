import React from 'react'
import Navbar from '../../Components/Navbar'

function SharedWithMe() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shared With Me</h1>
        {/* Add shared reviews content here */}
      </div>
    </div>
  )
}

export default SharedWithMe
