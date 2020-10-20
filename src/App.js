import React, { useState } from 'react'
import './styles.scss'
import Header from './components/header'
import FlashCard from './components/flashCard'
import WeatherInput from './containers/WeatherInput'
import WeatherDisplay from './containers/WeatherDisplay'

function App() {
  const [state, setState] = useState({
    weather: null,
  })

  const setWeather = (info) => {
    setState({
      ...state,
      weather: info,
    })
  }

  return (
    <div className='container is-max-desktop'>
      <Header title={`Today's Weather`} />
      <FlashCard weather={state.weather}/>
      <WeatherInput setWeather={setWeather}/>
      <WeatherDisplay weather={state.weather}/>
    </div>
  );
}

export default App;
