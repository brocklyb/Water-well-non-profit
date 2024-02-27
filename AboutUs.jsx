import './styles/aboutUs.css'
import Footer from './Footer'


import Banner1 from './images/about-us-banner.webp'
import Banner2 from './images/aboutus-banner-2.webp'
import Banner3 from './images/about-us-drink-water.webp'
import Banner4 from './images/our-team.webp'
import Banner5 from './images/about-us-banner5.jpg'

import TestimonyImg from './images/about-us-mugshot.jpg'

import Person1 from './images/icons/huner-icon.png'
import Person2 from './images/icons/customer-service.svg'
import Person3 from './images/icons/instagram-icon.png'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import DonateModal from './DonationModal'

function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [ donationAmount, setDonationAmount ] = useState(0)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div id='main_container'>

      <div id='banner1_container'>
        <img id='banner1_img' src={Banner1}></img>
      </div>

      <div id='aboutUs_container'>
        <div id='aboutus_sub_container'>
          <h1><strong>About Us</strong></h1>
          <h3 id='aboutus_desc'>The Water Project, Inc. is a 501(c)(3)
            non-profit organization unlocking human
              potential by providing reliable water 
              projects to communities in sub-Saharan 
              Africa who suffer needlessly from a lack of
              access to clean water and proper sanitation.
              <br></br> <br></br>
              Since 2006, we have been helping communities 
              gain access to clean, safe water by providing 
              training, expertise and financial support for 
              water project construction through our staff 
              and implementing partners.</h3>
        </div>              
      </div>

      <div id='banner2_container'>
        <img id='banner2_img' src={Banner2}></img>
      </div>

      <div id='problem_container'>
        <div id='problem'>
          <h1><strong>Real Problem</strong></h1>
          <h3>The water crisis is real. It’s affecting women,
            children, families and farmers. Women and girls 
            in sub-Saharan Africa are spending hours a day 
            fetching dirty water which leads to illness and 
            disease, robbing entire communities of their futures.
            Lack of access to safe water and proper sanitation 
            limits education and food production, it harms health
            and leads to a cycle of poverty.</h3>

            <br></br><br></br>

          <iframe width="660"
                  height="415" 
                  src="https://www.youtube.com/watch?v=sD-FEPismf4"
                  frameborder="0"
                  allowfullscreen>
          </iframe>

            <h3><br></br>We want to help our neighbors and we know you do 
            too. When you support The Water Project, you help 
            bring clean water through new wells, rehabbed wells,
            sand dams, rainwater catchment systems and/or spring
            protections to schools, medical clinics and villages.
            We believe local in-country solutions, through local 
            national leaders, can help end the water crisis one
            partnership at a time. We can’t wait to bring you into 
            the heart of their stories.</h3>
        </div>
      </div>

      <div id='banner3_container'>
        <img id='banner3_img' src={Banner3}></img>
      </div>

      <div id='testimony_container'>
        <div id='testimony_grid'>
          <img src={TestimonyImg} id='grid_item_img'></img>
          <h3 id='grid_item_text'>
            When you support The Water Project, you support
            clean water and our in-country teams. This means
            you invest in a water project and Catherine, one
            of our local leaders. You send her to leadership 
            training, you invest in her education and you support
            her as she walks alongside communities, teaching them
            and growing their potential.</h3>
        </div>
      </div>

      <div id='join_container'>
        <div id='join_content'>
            <h1>Join our community of world-changers, investing in
              local teams. Make The Water Promise!</h1>
            <div id='newsletter-about'>
              <h3>Sign up for our newsletter</h3>
              <input className='email-signup' placeholder='Email'></input>
              <input className='email-signup'placeholder='First Name'></input>
              <input className='email-signup' placeholder='Last Name'></input>
              <button className='email-signup' id='subscribe-about'>Subscribe</button>
          </div >
        </div>
      </div>

      <div id='impact_container'>
        <div id='impact_content'>
          <h1><strong>Real Impact.</strong></h1>
            <div id='impact_text_grid_container'>
              <p id='impact_text1'>We believe in accountability 
                                    and transparency to all the 
                                    people we serve including our
                                    donors, our communities and
                                    our teams. That's why we love
                                    sharing the awesome reports We
                                    receive from the field. They are
                                    an invitation to be part of the
                                    work and celebrations alongside us.
                                    When you support The Water Project,
                                    you unlock access to real people, both
                                    here at our headquarters and via our
                                    work in the field. Every gift is directly
                                    connected to a community.
                </p>

              <p id='impact_text2'>Every gift unlocks a story, a person,
                                  a future. Every gift has impact. To ensure
                                  that impact lasts, we also believe in monitoring
                                  all our projects, new and old, to make sure
                                  they are still functioning properly. And We
                                  fix what's broken. We believe water flowing
                                  today should still be flowing in the future.
                                  To see all our projects and their current 
                                  functionality check out our Project Directory.
              </p>
            </div>
            <button id='all-prj-button'><Link to="/currentprojects" className='white-link'>See All Current Projects</Link></button>
        </div>
      </div>

      <div id='join_container'>
        <div id='join_content'>
            <h1>Help fund a water project and see the results for yourself.</h1>
            <div>
            <button id='donate-button-about' onClick={openModal}>Donate Now</button>
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
        </div>
      </div>

      <div id='banner4_container'>
        <img id='banner4_img' src={Banner4}></img>
      </div>

      <div id='meetus_container'>
        <div id='meetus_content'>
          <h1><strong>Meet some of the Team</strong></h1>

          <div id='meetus_grid'>
            <div id='person1'>
              <img src={Person1}></img>
              <h2>Kati B</h2>
              <h3>Fundraise</h3>
              <p>About Me</p>
            </div>

            <div id='person2'>
              <img src={Person2}></img>
              <h2>Matthew</h2>
              <h3>Meme Expert</h3>
              <p>About Me</p>
            </div>

            <div id='person3'>
              <img src={Person3}></img>
              <h2>Mark</h2>
              <h3>Reddit user</h3>
              <p>About Me</p>
            </div>

          </div>
        </div>
      </div>

      <div id='banner5_container'>
        <img id='banner5_img' src={Banner5}></img>
      </div>

      <div id='real_motivation_container'>
        <div id='real_motivation'>
          <h1><strong>Real Motivation.</strong></h1>
            <div id='real_motivation_grid_container'>
              <p id='real_motivation_text1'>We believe in accountability 
                                    and transparency to all the 
                                    people we serve including our
                                    donors, our communities and
                                    our teams. That's why we love
                                    sharing the awesome reports We
                                    receive from the field. They are
                                    an invitation to be part of the
                                    work and celebrations alongside us.
                                    When you support The Water Project,
                                    you unlock access to real people, both
                                    here at our headquarters and via our
                                    work in the field. Every gift is directly
                                    connected to a community.
                </p>

              <p id='real_motivation_text2'>Every gift unlocks a story, a person,
                                  a future. Every gift has impact. To ensure
                                  that impact lasts, we also believe in monitoring
                                  all our projects, new and old, to make sure
                                  they are still functioning properly. And We
                                  fix what's broken. We believe water flowing
                                  today should still be flowing in the future.
                                  To see all our projects and their current 
                                  functionality check out our Project Directory.
              </p>
            </div>
        </div>
      </div>
    
      <Footer />

      
    </div>
  );
}

export default AboutUs;
