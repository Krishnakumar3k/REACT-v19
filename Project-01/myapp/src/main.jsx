import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Practice from './Practice'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practice/> */}
  </StrictMode>,
)
