import PropTypes from 'prop-types'
import React from 'react'

const FlashCard = ({ weather }) => {
  const displayFlash = () => { 
    if (weather) {
      if (weather.error) {
        return (
          <div className='message is-danger'>
            <p className='message-body'>Not found city</p>
          </div>
        )
      }
    }
    return (<div></div>)
  }

  return (
    <div>
      {displayFlash()}
    </div>
  )
}

FlashCard.propTypes = {
  weather: PropTypes.any,
}

export default FlashCard