import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import RoleSelection from './pages/RoleSelection.jsx'
import { createBrowserRouter  , RouterProvider } from 'react-router-dom'


const router =createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path: '/register',
    element:<Register />
  },
  {
    path:'/RoleSelection',
    element:<RoleSelection />
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