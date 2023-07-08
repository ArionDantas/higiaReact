import { Link } from 'react-router-dom';
import './NavbarClient.css'

// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import SearchIcon from '@mui/icons-material/Search'
// import HomeIcon from '@mui/icons-material/Home'
// import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup'
// import InventoryIcon from '@mui/icons-material/Inventory';

const NavbarClient = () => {
    return (
        <div className='bg-secondary p-4 d-flex gap-2'>
            <Link to="/client/resultClients" className='link-client'>
                <div className='div-link'>
                    <h1>Listar cliente</h1>
                </div>
            </Link>
            <Link to="/" className='link-client'>
                <div className='div-link'>
                    <h1>Listar cliente</h1>
                </div>
            </Link>
            <Link to="/" className='link-client'>
                <div className='div-link'>
                    <h1>Listar cliente</h1>
                </div>
            </Link>


            {/* <ul className='ul-client d-flex align-content-center justify-content-around'>
                <Link to="/" className='link-client'>
                        <li className='d-flex align-content-center m-0'>
                            <HomeIcon sx={{ fontSize: 32 }}></HomeIcon>
                            
                        </li>
                </Link>

                <Link to="/" className='link-client'>
                    <h1>Listar cliente</h1>
                </Link>

            </ul> */}
        </div>
    )
}

export default NavbarClient