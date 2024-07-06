import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    element => element.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    element => element.categoryId === 'COMEDY',
  )

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="banner"
      />
      <div className="content-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider content={actionMovies} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider content={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
