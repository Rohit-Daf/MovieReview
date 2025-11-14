import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { getMovies } from '../../Services/getMovies'

function AllMovies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies()
        if (response.status === 'success') {
          setMovies(response.data)
        } else {
          setError(response.error)
        }
      } catch (err) {
        setError('Failed to fetch movies')
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">All Movies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map(movie => (
            <div key={movie.id} className="bg-white shadow-md rounded-lg p-4 border">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-600 mb-4">Release Date: {movie.release_date}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Review this Movie
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllMovies
