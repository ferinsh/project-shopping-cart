import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './Homepage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: 'shop',
    element: <App />
  }
])

createRoot(document.querySelector('body')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
