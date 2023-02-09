import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { DefaultLayots } from './pages/layouts/DefaultLayouts/DefaultLayots'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayots />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
