import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import { CartProvider } from './CartContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>

  </React.StrictMode>,
)
