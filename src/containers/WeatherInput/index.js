import PropTypes from 'prop-types'
import React, { useState } from 'react'
import InputText from '../../components/inputText'
import { getWeather } from './request'

const WeatherInput = ({ setWeather }) => {
  const [state, setState] = useState({
    city: null,
    country: null,
  })

  const onChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const onClickHandler = async (event) => {
    const result = await getWeather(state.city, state.country)
    setWeather(result)
  }

  return (
    <div className='weather-input field is-horizontal'>
      <InputText label='city' onChangeHandler={onChangeHandler} />
      <InputText label='country' onChangeHandler={onChangeHandler} />
      <button className='button' type='button' onClick={onClickHandler}>Search</button>
    </div>
  )
}

WeatherInput.propTypes = {
  setWeather: PropTypes.func,
}

export default WeatherInput