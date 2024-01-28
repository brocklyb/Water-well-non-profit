import './styles/home.css'

import Footer from './Footer'

import HeroCard from './images/hero-card-banner.webp'
import HeroCard2 from './images/heroSub-banner.webp'
import HeroCard3 from './images/kids-around-well.jpg'
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
        <img src={Logo}></img>
      </div>

      <div id='about_us'>
        <h3>You can help end the water crisis and restore hope.<br></br>
           Together we'll provide access to clean, safe and 
           reliable water across sub-Saharan Africa <br></br>
           - one community at a time.
        </h3>
      </div>

      <div id='section2_container'>
        <img src={SmilingChild} id='section2_item1'></img>
        <h2 id='section2_item2'>Clean water is a whole family concern.
                                Finding water is a daily challenge for 
                                young girls, moms and sons. With a charitable
                                 donation today, you can lift this burden.
                                Providing a reliable and safe water source
                                 will unlock potential by returning time for 
                                 study, work, and imagination. </h2>
        <button id='item2_button'> Learn More</button>

        <h2 id='section2_item3'>A gift of lasting opportunity.
                                You'll come alongside our local 
                                teams who'll build water wells,
                                 small dams, spring protections 
                                 and other water sources.
                                Then, together, we'll make sure they 
                                keep working for years to come, 
                                creating opportunity all along the way. </h2>
        <img src={BucketKids} id='section2_item4'></img>
      </div>

      <div id='section3'>
        <div id='newslet_container'>
         
            <h3 id='newslet_1'>News Letter <br></br><br></br>Seeing is believing and we 
                            provide everything you'll need to 
                            experience the impact of your generosity
                            and to celebrate with the people you help.
                            Choose a community to support and you'll get 
                            stories, maps, photos and other information
                            right in your inbox about who and how you’ve 
                            helped. 
            </h3>  
            <img id='newslet_2' src={Logo}></img>

            <div id='newslet_3'>
              <input id='signup_email' placeholder='Email'></input>
              <button>Sign Up</button>
            </div>

        </div>
      </div>

      <div id='section4'>
        <img src={Section3Img}></img>
      </div>

      <div id='section5'>
        <h2>Projects</h2>
      </div>

      <div id='section6'>
        <h2>Google maps here</h2>
      </div>
      

      <Footer />


    </div>
  );
}

export default Home;
