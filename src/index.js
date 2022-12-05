import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'



import App from './App'
import './index.css'

const theme = createTheme({
  palette :{
    primary:{
      main: '#05050B80',
    },
    secondary:{
      main:'#090914',
    },
    
      }
    },
 )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
