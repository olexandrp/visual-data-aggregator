import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'

const root = document.getElementById('root')
const rootInstance = root && ReactDOM.createRoot(root)

rootInstance && rootInstance.render(
  <React.StrictMode>
    <CssBaseline />
    <Application />
  </React.StrictMode>
)
