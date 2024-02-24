import './styles/projectInformation.css'
import { projectData } from './data/Data';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <h1>Hello</h1>
    <h2>{param.id}</h2>
    <h3>{project.projectName}</h3>


    
   </div>
  );
}

export default ProjectInformation;
