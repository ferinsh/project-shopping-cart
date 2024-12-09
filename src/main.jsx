import { SpeedInsights } from "@vercel/speed-insights/next"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './Homepage.jsx'
import Cart from './Cart.jsx'
import ErrorPage from './ErrorPage.jsx'

import { CartProvider } from './components/context/CartContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: 'shop/:category',
    element: <App />
  },
  {
    path: 'cart',
    element: <Cart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider value={{1: 'hi'}}>
        <RouterProvider router={router} />
      </CartProvider>  
  </StrictMode>,

)
