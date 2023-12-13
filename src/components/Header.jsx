import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
      <Link className='header-title' to='/website-project'>#CARLIFE</Link>
      <nav className='nav'>
        <NavLink 
          to='host'
          style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
        >Host</NavLink>
      <NavLink
        to='about'
        style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
      >About</NavLink>
      <NavLink 
        to='cars'
        style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
      >Cars</NavLink>
      </nav>
    </div>
  )
}

export default Header