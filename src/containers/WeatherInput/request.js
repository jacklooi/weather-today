import axios from 'axios'

const getWeather = (city, countryCode) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  return axios.get(url).then(res => {
    return res.data
  }).catch((error) => {
    return { error: error.response }
  })
}

export { getWeather }