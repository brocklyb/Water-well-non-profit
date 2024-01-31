import './styles/home.css'

import Footer from './Footer'

import HeroCard from './images/hero-card-banner.webp'
import HeroCard2 from './images/grid-image1.webp'
import HeroCard3 from './images/grid-image2.jpg'
import Logo from './images/icons/logo.png'
import Section3Img from './images/kids-well2.jpg'
import SmilingChild from './images/smiling-kid.jpg'
import BucketKids from './images/project-photo.jpg'


import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  
  return (
    <div>

      <div id='hero_container'>
        <img id='hero_card' src={HeroCard} />  
        <div className='overlay-text'></div>
      </div>

      <div id='logo_container'>
        <img className='test' src={Logo}></img>
        <h1 className='test'>The Water Project</h1>
      </div>

      <div id='about_us'>
        <h3>You can help end the water crisis and restore hope.<br></br>
           Together we'll provide access to clean, safe and 
           reliable water across sub-Saharan Africa <br></br>
           - one community at a time.
        </h3>
      </div>

      <div id='section2_container'>
        <div id='section2_grid'>

          <div id='section2-item1-container'>
            <img id='section2-item1' src={HeroCard2} alt="Failed to Load" />
          </div>

          <div id='section2-item2-container'>
            <p id='section2-item2'><strong>Clean water is a whole family concern.</strong>
              <br></br><br></br>Finding water is a daily challenge for young girls, moms and sons.
              With a charitable donation today, you can lift this burden.<br></br><br></br>

              Providing a reliable and safe water source will unlock potential by
              returning time for study, work, and imagination. </p>
          </div>

          <div id='section2-item3-container'>
            <p id='section2-item4'><strong>A gift of lasting opportunity.</strong>
              <br></br><br></br>You'll come alongside our local teams who'll build water wells, small dams,
              spring protections and other water sources.<br></br><br></br>

              Then, together, we'll make sure they keep working for 
              years to come, creating opportunity all along the way. </p>
          </div>

          <div id='section2-item4-container'>
            <img id='section2-item3' src={HeroCard3} alt="Failed to Load" />
          </div>

        </div>
      </div>

      
    <Footer />


    </div>
  );
}

export default Home;
