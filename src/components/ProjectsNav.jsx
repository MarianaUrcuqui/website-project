import React from 'react'
import { NavLink } from 'react-router-dom'

function ProjectsNav() {
  return (
    <div className='projects-nav-div'>
    <nav className='nav'>
    <NavLink
      to='.'
      end
      style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
    >Project 1</NavLink>
    <NavLink 
      to='project02'
      style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
    >Project 2</NavLink>
    <NavLink 
      to='project03'
      style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
    >Project 3</NavLink>
    </nav>
  </div>
  )
}

export default ProjectsNav