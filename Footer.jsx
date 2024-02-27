import './styles/footer.css'

import { Link } from 'react-router-dom'

import Logo from './images/icons/logo.png'
import Email from './images/icons/email-icon.png'
import Facebook from './images/icons/facebook-icon.png'
import Instagram from './images/icons/instagram-icon.png'
import Venmo from './images/icons/venmo-icon.png'

import Address from './images/icons/mailbox-icon.png'
import Mailbox from './images/icons/mailbox-icon.png'
import Telephone from './images/icons/telephone-icon.png'


function Footer() {
  return (
    <div id='footer_container'>
      <div id='footer_container_grid'>

        <div id='section1-container'>
          
            <h1><u>The Water Project</u></h1>
            <div id='socail-media-icons-container'>
                  <img className='social-icon' src={Instagram}></img>
                  <img className='social-icon' src={Facebook}></img>
                  <img className='social-icon' src={Venmo}></img>
            </div>
            <a href='/home'><img className='company-logo' src={Logo} id='logo' alt="Failed to load" /></a>
        </div>

        <div id='section2-container'>
          <div id='contact-container'>
            <h3><strong><u>Contact</u></strong></h3>

            <div id='contact-grid'>
              <div id='left-column'>
                <img id='contact-icon' className='grid-icon'  src={Address} />
                <img id='contact-icon' className='grid-icon'  src={Email} />
                <img id='contact-icon' className='grid-icon'  src={Telephone} />
              </div>

              <div id='right-column'>
                <p className='grid-icon'><strong>12345 N 96th St, Phoenix AZ 42069</strong></p>
                <p className='grid-icon'><strong>brockbozzuto@gmail.com</strong></p>
                <p className='grid-icon'><strong>623-251-8769</strong></p>
              </div>
              
            </div>
          </div>
        </div>

        <div id='section3-container'>
          <div id='useful-links-container'>
              <h3> <strong><u>Useful Links</u></strong> </h3>
              <p className='footer-link'> <Link to="/home">Home</Link> </p>
              <p className='footer-link'> <Link to="/about">About Us</Link> </p>
              <p className='footer-link'> <Link to="/contact">Contact</Link> </p>
              <p className='footer-link'> <Link to="/currentprojects">Current Projects</Link> </p>
              <p className='footer-link'> <Link to="/donation">Donate Now</Link> </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
