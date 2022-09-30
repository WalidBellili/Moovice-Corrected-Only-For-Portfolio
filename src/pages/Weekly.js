import { useEffect, useState } from 'react'
import moment from 'moment'

import Card from '../components/Card'

const Weekly = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const dateFormat = 'YYYY-MM-DD'
    const today = moment().format(dateFormat)
    const sevenDaysAgo = moment().subtract(7, 'days').format(dateFormat)
    const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${sevenDaysAgo}&primary_release_date.lte=${today}&api_key=fea42b1e836ac59816b8332e564dbb41`

    const request = await fetch(url)
    const response = await request.json()
    setMovies(response.results)
  }

  return (
    <>
      <h1>Weekly</h1>
      <section className='row'>
        {movies.map(movie => (
          <Card key={movie.title} movie={movie} />
        ))}
      </section>
    </>
  )
}

export default Weekly
