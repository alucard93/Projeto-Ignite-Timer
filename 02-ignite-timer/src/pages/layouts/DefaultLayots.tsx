import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../../components/Header/Header'

export const DefaultLayots = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
