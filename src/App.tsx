import React from 'react'

import { AppRoutes } from './routes'

import { AppProvider } from '@/providers'

//import { AppRoutes } from '@/routes'

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
