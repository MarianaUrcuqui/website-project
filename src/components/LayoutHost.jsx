import React from 'react'
import { Outlet } from 'react-router'
import HostNav from './HostNav'

function LayoutHost() {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  )
}

export default LayoutHost