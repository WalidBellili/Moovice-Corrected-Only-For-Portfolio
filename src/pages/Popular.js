import { useEffect, useState } from 'react'
import Card from '../components/Card'

const Popular = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const request = await fetch(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fea42b1e836ac59816b8332e564dbb41'
    )

    const response = await request.json()

    setMovies(response.results)
  }

  return (
    <>
      <h1>Popular</h1>
      <section className='row'>
        {movies.map(movie => (
          <Card key={movie.title} movie={movie} />
        ))}
      </section>
    </>
  )
}

export default Popular
