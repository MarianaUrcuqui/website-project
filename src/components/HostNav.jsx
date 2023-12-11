import React from 'react'
import { NavLink } from 'react-router-dom'

function HostNav() {
  return (
    <div className='host-nav-div'>
    <nav className='nav'>
    <NavLink
      to='.'
      end
      style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
    >Dashboard</NavLink>
    <NavLink 
      to='cars'
      style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
    >Cars</NavLink>
    </nav>
  </div>
  )
}

export default HostNav