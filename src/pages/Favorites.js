import { useState, useEffect } from 'react'

const Favorite = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchFavoriteMovies()
    // eslint-disable-next-line
  }, [])

  const fetchFavoriteMovies = async () => {
    // recup les ids du localstorage
    const stringifiedFavoriteIds = localStorage.getItem('favoriteIds')
    const favoriteIds = JSON.parse(stringifiedFavoriteIds)

    if (favoriteIds) {
      // construire notre boite de promesses
      const promises = favoriteIds.map(id => {
        return fetchMovie(id)
      })

      // dire a Promise.all de prendre la boite de promesses
      // de resoudre toutes ces promesses
      // une fois qu'elle a fini, de nous donner une
      // nouvelle boite avec toutes les reponses
      const response = await Promise.all(promises)
      setMovies(response)
    }
  }

  const fetchMovie = async id => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fea42b1e836ac59816b8332e564dbb41`
    )
    const response = await request.json()
    return response
  }

  return (
    <>
      <h1>Favorites</h1>

      {movies.length === 0 && <p>Pas de favoris</p>}

      <section className='row'>
        {movies.map(movie => (
          <p key={movie.title}>{movie.title}</p>
        ))}
      </section>
    </>
  )
}

export default Favorite
