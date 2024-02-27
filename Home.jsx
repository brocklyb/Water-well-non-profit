import './styles/home.css'

import Footer from './Footer'

import HeroCard from './images/hero-card-banner.webp'
import HeroCard2 from './images/grid-image1.webp'
import HeroCard3 from './images/grid-image2.jpg'
import Logo from './images/icons/logo.png'
import Section3Img from './images/kids-well2.jpg'
import SmilingChild from './images/smiling-kid.jpg'
import BucketKids from './images/project-photo.jpg'
import WellSchematic from './images/well-schematic.png'

import {projectData} from './data/Data'
import checkMark from './images/icons/check-mark.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Home() {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    creatProjects()
  }, [])

  const creatProjects = () =>{
    const projects = []
    for(let i =0; i<15; i++){
      projects.push(projectData[i])
    }
    setProjects(projects)
  }
  
  return (
    <div>

      <div id='hero_container'>
        <img id='hero_card' src={HeroCard} />  
      </div>

      <div id='logo_container'>
        <img className='test' src={Logo}></img>
      </div>
      <div id='logo_container'>
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

      <div id='cur-prjs'>
        <h1><u>Current Projects</u></h1>
        <br></br>
        <button><Link to="/currentprojects" className='white-link'>See All Current Projects</Link></button>
      </div>


          <div id='project-container'>
            <div id='projects'>
              
              {projects.map((item,position) => (
           
                <div className='each-prj-card' key={position}>
                <div className='project-details'>
                  <div>
                    <img src={item.image} alt='Failed to load'></img>
                    <h1>{item.projectName}</h1>
                  </div>

                  <h4>{item.location}</h4>
        

                  {item.isCompleted == true ? (
                    <div id='completed'>
                      <img id='checkMark' src={checkMark}></img>
                      <p id='completion'><strong>Completed:</strong> {item.completionYear}</p>
                      <p id='completion'></p>  
                    </div>
                  ) : (
                    <div id='item4'>
                      <p>Goal: ${item.moneyGoal}</p> 
                      <p>Current: ${item.moneyCurrent}</p>
                      <p><strong>IN PROGRESS</strong></p>
                    </div>
                    
                  )}

                <Link to={`/projectInformation/${item.projectID}`}>Learn More</Link>
                </div>
                </div> 
                  ))}
  
            </div>
          </div>

          <div id='diagram-container'>
            <h1><ul>How our pump works</ul></h1>
            <div id='well-schematic'>
              <img id='well-schematic-img' src={WellSchematic} alt='failed to load schematic'></img>
              
              <div id='pump-description'>
                <p>A hand pump well operates through a series of mechanical components that harness human effort to draw water from underground sources. When the pump handle is manually operated, it activates a piston mechanism inside the pump cylinder. As the handle is raised, the piston creates a vacuum, lifting water from the well through a check valve. Upon lowering the handle, another check valve prevents water from flowing back down, enabling the water to be expelled at the surface for consumption or storage.</p>
              </div>
            </div>
          </div>

          <div id='google-api'>
            <h2 id='google-api'>GOOGLE API HERE</h2>
          </div>

          <div id='newsletter'>
            <h3>Sign up for our newsletter</h3>
            <input className='email-signup' placeholder='Email'></input>
            <input className='email-signup' placeholder='First Name'></input>
            <input className='email-signup' placeholder='Last Name'></input>
            <button className='subscribe-home'>Subscribe</button>
          </div>

    <Footer />
    </div>
  );
}

export default Home;
