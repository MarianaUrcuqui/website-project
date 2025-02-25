import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
      <Link className='header-title' to='/website-project/'>Mariana Urcuqui</Link>
      <nav className='nav'>
        <NavLink 
          to='/website-priject/'
          style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
        >Home</NavLink>
      <NavLink
        to='about'
        style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
      >About me</NavLink>
      <NavLink 
        to='cars'
        style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
      >Projects</NavLink>
      <NavLink 
        to='Contact'
        style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
      >Contact</NavLink>
      </nav>
    </div>
  )
}

export default Header