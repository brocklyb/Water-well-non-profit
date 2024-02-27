import './styles/projectInformation.css'
import { projectData } from './data/Data';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import excavatorImg from './images/workers.webp'

import Footer from './Footer'

function ProjectInformation() {
    useEffect(() => {
        displayProject()
      },[])

    const param = useParams()
    const urlID = Number(param.id)

    const [ project, setProject ] = useState([""])

    const displayProject = () =>{
        for(let i=0; i<projectData.length; i++){
            if(projectData[i].projectID == urlID){
                setProject(projectData[i])
            }
        }
    }

  return (
   <div>
      

    <div id='main-flex-container'>
      <div>
        <img id='excavator' src={excavatorImg}></img>
      </div>

      <div id='projectDetails'>
        <h1>{project.projectName}</h1>
        <h3>{project.location}</h3>
        <p>{project.description}</p>
        <p>${project.moneyGoal}</p>
        <p>${project.moneyCurrent}</p>
      </div>
    </div>
    
      <div id='google'>
        <h1>GOOGLE MAP HERE</h1>
      </div>
    <Footer/>
   </div>
  );
}

export default ProjectInformation;
