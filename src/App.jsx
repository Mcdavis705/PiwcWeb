import React from 'react'
import AppRouter from './router/AppRouter.jsx'

import MainLayout from './components/layout/MainLayout.jsx'

function App() {

  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  )
}

export default App
