import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ title }) => {
  return (
    <h1 className='title'>{title}</h1>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header