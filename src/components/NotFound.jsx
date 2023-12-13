import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='error-div'>
      <h2>Sorry, but we couldn't load the information.</h2>
      <Link to='/website-project/' className='error-link'>Return to home</Link>
    </div>)
}

export default NotFound