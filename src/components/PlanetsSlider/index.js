// Write your code here
import Slider from 'react-slick'

import './index.css'
import PlanetItem from '../PlanetItem/index'

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="app-container">
      <div data-testid="planets" className="slider-container">
        <Slider className="slider" {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
