import MiniCard from './MiniCard'

const HomePreview = ({ title, movies }) => {
  console.log(title)
  console.log(movies)

  return (
    <section className='mt-5'>
      <h2>{title}</h2>
      <div className='d-flex w-100 overflow-y-scroll'>
        {movies.map(movie => (
          <MiniCard key={movie.title} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default HomePreview
