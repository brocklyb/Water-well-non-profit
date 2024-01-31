import './styles/navbar.css'
import {Link} from 'react-router-dom';

import Logo from './images/icons/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
        <nav className='navbar'>
            <img src={Logo} alt='Failed to Load'></img>
              <div className='nav-links'>
                <p className='nav-link'> <Link to="/home">Home</Link> </p>
            
                <p className='nav-link'> <Link to="/about">About Us</Link> </p>

                <p className='nav-link'> <Link to="/contact">Contact</Link> </p>

                <p className='nav-link'> <Link to="/currentprojects">Current Projects</Link> </p>

                <p className='nav-link'> <Link to="/donation">Donate Now</Link> </p>
              </div>
        </nav>
  
  );
}

export default Navbar;
