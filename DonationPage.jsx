import './styles/donationPage.css'
import { useState } from 'react';

function DonationPage() {
    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <a href="#" onClick={togglePopup}>
          Open Popup
        </a>
  
        {isOpen && (
          <div className="popup">
            <div className="button-row">
              <button>Button 1</button>
              <button>Button 2</button>
              <button>Button 3</button>
            </div>
            <div className="button-row">
              <button>Button 4</button>
              <button>Button 5</button>
              <button>Button 6</button>
            </div>
            <div className="button-row">
              <button>Button 7</button>
              <button>Button 8</button>
              <button>Button 9</button>
            </div>
            
            <div className="input-row">
              <input type="text" placeholder="Input 1" />
              <input type="text" placeholder="Input 2" />
              <input type="text" placeholder="Input 3" />
            </div>
  
            <div className="card-info">
              <label>Card Number:</label>
              <input type="text" placeholder="1234 5678 9012 3456" />
              <label>Expiry Date:</label>
              <input type="text" placeholder="MM/YY" />
              <label>CVC:</label>
              <input type="text" placeholder="123" />
            </div>
            
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        )}
      </div>
    );
  };
  

export default DonationPage;
