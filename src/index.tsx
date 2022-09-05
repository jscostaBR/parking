import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Router } from '../src/router'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
)
