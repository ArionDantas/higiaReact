import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search'
import DomainIcon from '@mui/icons-material/Domain'
import HomeIcon from '@mui/icons-material/Home'
import EventNoteIcon from '@mui/icons-material/EventNote'
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup'

function Navbar() {

    return (
        <div className='navbar-container'>
            <div className="navbar-content">
                <div>
                    <ul className="nav">
                        <Link className='link' to="/"><span className='link-nav'><li><HomeIcon sx={{ fontSize: 32 }} />  </li></span></Link>
                        <Link className='link' to="/client"><span className='link-nav'><li><AccountCircleIcon sx={{ fontSize: 32 }} /></li></span></Link>
                        <Link className='link' to="/dashboard"><span className='link-nav'><li><DashboardIcon sx={{ fontSize: 32 }} /></li></span></Link>
                        <Link className='link' to="/search"><span className='link-nav'><li><SearchIcon sx={{ fontSize: 32 }} /></li></span></Link>
                        <Link className='link' to="/domain"><span className='link-nav'><li><DomainIcon sx={{ fontSize: 32 }} /></li></span></Link>
                        <Link className='link' to="/event_note"><span className='link-nav'><li><EventNoteIcon sx={{ fontSize: 32 }} /></li></span></Link>
                    </ul>
                </div>
                <div className="refresh">
                    <ul className="nav">
                        <Link className='link' to='/'><span className='link-nav'><li><WifiProtectedSetupIcon sx={{ fontSize: 32 }} /></li></span></Link>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default Navbar