import MovieItem from '../MovieItem'
import Slider from 'react-slick'

const MoviesSlider = props => {
  const {content} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {content.map(element => (
          <MovieItem item={element} key={element.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
