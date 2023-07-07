import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Cliente from './routes/Client/Client';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import Product from './routes/Product/Product';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/client',
        element: <Cliente />
      },
      {
        path: '/product',
        element: <Product />
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
