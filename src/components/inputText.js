import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

const InputText = ({ label, onChangeHandler }) => {
  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>{_.startCase(label)}:</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <div className='control'>
            <input className='input' type='text' name={label} onChange={onChangeHandler} />
          </div>
        </div>
      </div>
    </div>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
}

export default InputText