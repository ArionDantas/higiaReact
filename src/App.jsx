// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './global.css'


function App() {

  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App