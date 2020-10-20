import PropTypes from 'prop-types'
import React from 'react'
import { getImage } from './image'

const WeatherDisplay = ({weather}) => {

  const display = () => { 
    if (weather) {
      if (weather.error) {
        return (<div></div>)
      }
      return (
        <div>
          <div className='media'>
            <div className='media-left'>
              <figure className={`image is-128x128 ${getImage(weather.weather[0].description)}`}>
              </figure>
            </div>
            <div className='media-content'>
              <p className='title'>{weather.weather[0].main}</p>
              <p className='subtitle'>{weather.weather[0].description}</p>
            </div>
          </div>
          <div className='field is-horizontal'>
            <div className='field-label'>
              <label className='label'>Temperature:</label>
            </div>
            <div className='field-body is-normal'>
              <span>{weather.main.temp_min}°C ~ {weather.main.temp_max}°C</span>
            </div>
          </div>
          <div className='field is-horizontal'>
            <div className='field-label'>
              <label className='label'>Humidity:</label>
            </div>
            <div className='field-body is-normal'>
              <span>{weather.main.humidity}%</span>
            </div>
          </div>
        </div>
      )
    }
    return (<div></div>)
  }

  return (
    <div>
      {display()}
    </div>
  )
}

WeatherDisplay.propTypes = {
  weather: PropTypes.any,
}

export default WeatherDisplay