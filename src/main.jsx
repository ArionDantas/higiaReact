import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Cliente from './routes/Client/Client';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import Product from './routes/Product/Product';
import Search from './routes/Search'
import Dashboard from './routes/Dashboard'
import ViewClient from './components/ViewClient/ViewClient';
import EditClient from './components/EditClient/EditClient';


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
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/client',
        element: <Cliente />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/client/viewClient/:cpf',
        element: <ViewClient />
      },
      {
        path: '/client/editClient/:cpf',
        element: <EditClient />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
