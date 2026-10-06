import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { SmoothScrollProvider } from './providers/SmoothScrollProvider'
import { GsapProvider } from './providers/GsapProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrollProvider>
      <GsapProvider>
        <App />
      </GsapProvider>
    </SmoothScrollProvider>
  </StrictMode>,
)
