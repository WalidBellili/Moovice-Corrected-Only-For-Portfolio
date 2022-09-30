const MiniCard = ({ movie }) => {
  const { title, poster_path } = movie

  return (
    <article className='p-2 col-12 col-md-2'>
      <div className='card h-100'>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          className='card-img-top'
          alt={title}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
        </div>
      </div>
    </article>
  )
}

export default MiniCard
