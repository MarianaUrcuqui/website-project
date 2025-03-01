import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  /*const path = useLocation().pathname;
  const location = path.split("/")[2]; */
  return (
    <div className='header-div'>
      <NavLink 
      to='/website-project'
      className='header-title'>Mariana Urcuqui</NavLink>
      <nav className='nav'>
      <NavLink
        to='about'
        style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
      >About me</NavLink>
      <NavLink 
        to='projects'
        style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
      >Projects</NavLink>
      </nav>
    </div>
  )
}

export default Header