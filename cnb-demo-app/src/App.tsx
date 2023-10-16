import React from 'react'
import { LandingPage } from './features/LandingPage'
import { FxContextProvider } from './context/FxContext'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient()}>
        <FxContextProvider>
          <LandingPage />
        </FxContextProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
