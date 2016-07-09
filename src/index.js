import React from 'react'

const ToggleView = ({show, children}) => show ? children : null

ToggleView.propTypes = {
  children: React.PropTypes.any.isRequired,
  show: React.PropTypes.bool.isRequired
}

export default ToggleView
