import './styles/navbar.css'
import {Link} from 'react-router-dom';

import Logo from './images/icons/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
        <nav className='navbar'>

            <img src={Logo} alt='Failed to Load'></img>

            <p> <Link to="/home">Home</Link> </p>
        
            <p> <Link to="/about">About Us</Link> </p>

            <p> <Link to="/contact">Contact</Link> </p>

            <p> <Link to="/currentprojects">Current Projects</Link> </p>

            <p className='navbar_donate'> <Link to="/donation">Donate Now</Link> </p>

        </nav>
  
  );
}

export default Navbar;
