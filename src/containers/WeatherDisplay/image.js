import _ from 'lodash'

const getImage = (weatherDesc) => {
  if (_.includes(weatherDesc, 'cloud')) {
    return 'weather-cloud'
  } else if (_.includes(weatherDesc, 'rain')) {
    return 'weather-rain'
  } else if (_.includes(weatherDesc, 'clear')) {
    return 'weather-clear'
  } else {
    return 'weather-default'
  }
}

export { getImage }