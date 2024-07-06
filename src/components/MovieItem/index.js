import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MovieItem = props => {
  const {item} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = item
  return (
    <div className="item-container">
      <Popup
        trigger={
          <button className="button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="movie-banner" />
          </button>
        }
        modal
      >
        {close => (
          <div className="popup-container">
            <button
              className="button cancel"
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
