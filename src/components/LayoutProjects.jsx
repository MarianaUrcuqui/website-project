import React from 'react'
import { Outlet } from 'react-router'
import ProjectsNav from './ProjectsNav'

function LayoutProjects() {
  return (
    <>
      <ProjectsNav />
      <Outlet />
    </>
  )
}

export default LayoutProjects