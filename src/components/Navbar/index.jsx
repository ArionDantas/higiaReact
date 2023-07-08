import { Link } from 'react-router-dom'
import './index.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup'
import InventoryIcon from '@mui/icons-material/Inventory';

function Navbar() {

    return (
        <div className='navbar-container'>
            <div className="navbar-content">
                <div>
                    <ul className="nav">
                        <Link className='link' to="/"><span className='link-nav'><li><HomeIcon sx={{ fontSize: 32 }} /></li></span></Link>
                        <Link className='link' to="/dashboard"><span className='link-nav'><li><DashboardIcon sx={{ fontSize: 32 }} /></li></span></Link>
                        <Link className='link' to="/search"><span className='link-nav'><li><SearchIcon sx={{ fontSize: 32 }} /></li></span></Link>
                        <Link className='link' to="/client"><span className='link-nav'><li><AccountCircleIcon sx={{ fontSize: 32 }} /></li></span></Link>
                        <Link className='link' to="/product"><span className='link-nav'><li><InventoryIcon sx={{ fontSize: 32 }} /></li></span></Link>
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