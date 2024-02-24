import { useState, useEffect } from 'react';

import './styles/currentProjects.css'

import checkMark from './images/icons/check-mark.svg'

import {projectData} from './data/Data'

import Footer from './Footer'

function CurrentProjects() {
  const [ projectCount, setProjectCount ] = useState(0)
  const [ selectedProjectLocation, setSelectedProjectLocation ] = useState("all")
  const [ isSortData, setIsSortData ] = useState(false)
  const [ filteredProjectData, setFilteredProjectData ] = useState([])

  useEffect(() => {
    handleSetFilteredProjectData()
    const countFilteredProjects = countProjects()
    setProjectCount(countFilteredProjects)
  },[])

  useEffect(() => {
    const countFilteredProjects = countProjects()
    setProjectCount(countFilteredProjects)
  },[filteredProjectData])

  const handleSubmit = (e) =>{
    e.preventDefault()
    handleSetFilteredProjectData()
  }

  const handleSetFilteredProjectData = () =>{
    if(selectedProjectLocation == "all"){
      const allProjects = filterAllProjects()
      setFilteredProjectData(allProjects)
    }else{
      const filteredProjects = filterProjects()
      setFilteredProjectData(filteredProjects)
    }
  }

  const handleLocationSelect = (e) =>{
    setSelectedProjectLocation(e.target.value)
  }

  const handleIsSortData = (e) =>{
    setIsSortData(!isSortData)
  }

  const countProjects = () =>{
    return filteredProjectData.length
  }

  const filterAllProjects = () =>{
    const completedProjects = []
    const incompletedProjects = []
    if(isSortData == false){
      for(let i=0; i<projectData.length; i++){
        let isProjectComplete = projectData[i].isCompleted
        if(!isProjectComplete){
          incompletedProjects.push(projectData[i])
        }if(isProjectComplete){
          completedProjects.push(projectData[i])
        }
      }
      return incompletedProjects.concat(completedProjects)

    }else{
      if(isSortData == true){
        for(let i=0; i<projectData.length; i++){
          let isProjectComplete = projectData[i].isCompleted
          if(isProjectComplete){
            completedProjects.push(projectData[i])
          }if(!isProjectComplete){
            incompletedProjects.push(projectData[i])
          }
        }
        return completedProjects.concat(incompletedProjects)
      }
    }
  }

  const filterProjects = () =>{
    const completedProjects = []
    const incompletedProjects = []
    if(isSortData == false){
      for(let i=0; i<projectData.length; i++){
        let projectLocation = projectData[i].location
        let isProjectComplete = projectData[i].isCompleted
        if(!isProjectComplete & selectedProjectLocation.includes(projectLocation)){
          incompletedProjects.push(projectData[i])
        }if(isProjectComplete & selectedProjectLocation.includes(projectLocation)){
          completedProjects.push(projectData[i])
        }
      }
      return incompletedProjects.concat(completedProjects)

    }else{
      if(isSortData == true){
        for(let i=0; i<projectData.length; i++){
          let projectLocation = projectData[i].location
          let isProjectComplete = projectData[i].isCompleted
          if(isProjectComplete & selectedProjectLocation.includes(projectLocation)){
            completedProjects.push(projectData[i])
          }if(!isProjectComplete & selectedProjectLocation.includes(projectLocation)){
            incompletedProjects.push(projectData[i])
          }
        }
        return completedProjects.concat(incompletedProjects)
      }
    }
  }

        return (
          <div className="form-container">  
          <div id='userForm'>
           <h1>Current Projects</h1>

              <div id='user-filters'>
                <form onSubmit={handleSubmit}>
                  <label>Choose an location:</label>
                  <select id="options" name="options" onChange={handleLocationSelect}>
                    <option value="all">All Projects</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Uganda">Uganda</option>
                  </select>
                  <label id='sortByComplete'>Sort by completed?</label>
                  <input id='sss' onChange={handleIsSortData} type='checkbox'/>
                  <input  type='submit'/>
                </form>
              </div>
              

              <div>
                <h2>Project Count = {projectCount}</h2>
              </div>

              
          </div>

       

          <div id='projectContainer'>
            <div id='projectGrid'>
              {filteredProjectData.map((item,position) => (
                <div key={position} className='projectCard'>
                <div>
                  <img src={item.image} alt='Failed to load'></img>
                  <h1>{item.projectName}</h1>
                  <h4>{item.location}</h4>
                  <p>{item.description}</p>

                  {item.isCompleted == true ? (
                    <div id='isCompleted'>
                      <p id='completion'><strong>Completed</strong></p>
                      <p id='completion'>{item.completionYear}</p>
                      <img id='checkMark' src={checkMark}></img>
                    </div>
                  ) : (
                    <div>
                      <p>Goal: ${item.moneyGoal}</p> 
                      <p>Current: ${item.moneyCurrent}</p>
                    </div>    
                  )}
                  <a href=''>Learn More</a>
                </div>
              </div> 
              ))}
            </div>
          </div>
      
        
    </div>
  );
}

export default CurrentProjects;
