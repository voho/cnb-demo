import React from 'react'
import { LandingPage } from './features/LandingPage'
import { FxContextProvider } from './context/FxContext'

function App() {
  return (
    <div className="App">
      <FxContextProvider>
        <LandingPage />
      </FxContextProvider>
    </div>
  )
}

export default App
