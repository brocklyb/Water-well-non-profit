import './styles/contact.css'
import Footer from './Footer'

import CustomerService from './images/icons/customer-service.svg'

function Contact() {


  return (
    <div id='main-contact-container'>

      <div id='contact-content-container'>
        <div id='contact-header'>
          <h1>We've been waiting<br></br> for you</h1>
          <h3>We want to hear from you. Let us know how we can help</h3>
          <img id='customer-service' src={CustomerService}></img>
        </div>
        
      </div>

      

      <div id='contact-form'>
          <div id='circle-background'>
            <div id='contact-form-content'>
              <input className='input-fields' placeholder='First Name'></input>
              <input className='input-fields' placeholder='Last Name'></input>
              <input className='input-fields' placeholder='Phone number'></input>
              <input className='input-fields' placeholder='Email'></input>
              <input className='input-fields' id='user-message' placeholder='Message'></input>
              <button id='submit-button'>Submit</button>
            </div>
          </div>
        </div>

    

<Footer />
    </div>

    
  );
}

export default Contact;
