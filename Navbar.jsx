import './styles/navbar.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';

import Logo from './images/icons/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';

import DonateModal from './DonationModal'


function Navbar() {
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };



  return (
        <nav className='navbar'>
          <div id='nav-content'>
          <a href="/home"> <img src={Logo} alt='Failed to Load' /> </a>
            <div id='nav-links'>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/currentprojects">Current Projects</Link></li>
              
              <div>
              <button id='donate-button' onClick={openModal}>Donate Now</button>

              <DonateModal showModal={showModal} closeModal={closeModal}>
                <h1>Donation</h1>
                <div className="popup">
                  <div className="button-row">
                    <button className='donation-button-navbar'>$5</button>
                    <button className='donation-button-navbar'>$10</button>
                    <button className='donation-button-navbar'>$20</button>
                  </div>
                  <div className="button-row">
                    <button className='donation-button-navbar'>$50</button>
                    <button className='donation-button-navbar'>$100</button>
                    <button className='donation-button-navbar'>$200</button>
                  </div>
                  <div className="button-row">
                    <button className='donation-button-navbar'>$500</button>
                    <button className='donation-button-navbar'>$1,000</button>
                    <button className='donation-button-navbar'>Custom</button>
                  </div>
                  
                  <div className="cust-info-row">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Address" />
                  </div>

                  <div className="card-info">
                    <br></br>
                    <input type="text" placeholder="1234 5678 9012 3456" />
                    <input type="text" placeholder="MM/YY" />
                    <input type="text" placeholder="123" />
                  </div>
                </div>
                <button className='submit-donation-navbar'>Submit</button>
                <button onClick={closeModal}>Close</button>
              </DonateModal>
              </div>
              
            </div>
          </div>
        </nav>
  );
}

export default Navbar;

/*         <nav className='navbar'>
            <img src={Logo} alt='Failed to Load'></img>
              <div className='nav-links'>
                <p className='nav-link'> <Link to="/home">Home</Link> </p>
            
                <p className='nav-link'> <Link to="/about">About Us</Link> </p>

                <p className='nav-link'> <Link to="/contact">Contact</Link> </p>

                <p className='nav-link'> <Link to="/currentprojects">Current Projects</Link> </p>

                  
                  <button id='donate-button' onClick={openModal}>Donate Now</button>

                  <DonateModal showModal={showModal} closeModal={closeModal}>
                    <h1>Donation</h1>
                    <div className="popup">
                      <div className="button-row">
                        <button>$5</button>
                        <button>$10</button>
                        <button>$20</button>
                      </div>
                      <div className="button-row">
                        <button>$50</button>
                        <button>$100</button>
                        <button>$200</button>
                      </div>
                      <div className="button-row">
                        <button>$500</button>
                        <button>$1,000</button>
                        <button>Custom</button>
                      </div>
                      
                      <div className="cust-info-row">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="Address" />
                      </div>
            
                      <div className="card-info">
                        <label>Card Number:</label>
                        <input type="text" placeholder="1234 5678 9012 3456" />
                        <label>Expiry Date:</label>
                        <input type="text" placeholder="MM/YY" />
                        <label>CVC:</label>
                        <input type="text" placeholder="123" />
                      </div>
                    </div>
                    <button onClick={closeModal}>Close</button>
                  </DonateModal>
             
                
              </div>
        </nav>*/
