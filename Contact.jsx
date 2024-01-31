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
              <input placeholder='First Name'></input>
              <input placeholder='Last Name'></input>
              <input placeholder='Phone number'></input>
              <input placeholder='Email'></input>
              <input id='user-message' placeholder='Message'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>

    

<Footer />
    </div>

    
  );
}

export default Contact;
