import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './global.css'
import { queryClient } from './services/queryCliente'
import { QueryClientProvider } from '@tanstack/react-query'


function App() {

  return (
    <>
      <QueryClientProvider client={ queryClient }>
        <Navbar />
        <Outlet />
      </QueryClientProvider>
    </>
  )
}

export default App