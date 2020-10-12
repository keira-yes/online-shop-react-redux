import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'

const Startup = (props) => {
  useEffect(() => {}, [])
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup
