import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Authprovider from './Context/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Authprovider>
       <div>
        <App />
       </div>
    </Authprovider>
  </BrowserRouter>
)
