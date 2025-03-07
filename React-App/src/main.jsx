import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter  , RouterProvider } from 'react-router-dom'



const router =createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/app',
    element : <App/> 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)