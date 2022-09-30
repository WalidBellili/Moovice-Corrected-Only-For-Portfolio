const Card = ({ movie }) => {
  const { title, release_date, poster_path, overview, id } = movie

  const handleFavoriteClick = () => {
    let stringifiedFavoriteIds = localStorage.getItem('favoriteIds')
    let favoriteIds = []

    if (stringifiedFavoriteIds) {
      favoriteIds = JSON.parse(stringifiedFavoriteIds)
    }

    if (!favoriteIds.includes(id)) {
      favoriteIds.push(id)
      stringifiedFavoriteIds = JSON.stringify(favoriteIds)
      localStorage.setItem('favoriteIds', stringifiedFavoriteIds)
    }
  }

  return (
    <article className='p-2 col-12 col-md-4'>
      <div className='card h-100'>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          className='card-img-top'
          alt={title}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>Release date: {release_date}</p>
          <p className='card-text'>{overview}</p>
        </div>
        <button className='btn btn-primary m-2' onClick={handleFavoriteClick}>
          Add to favorites
        </button>
      </div>
    </article>
  )
}

export default Card
