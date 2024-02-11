import { useState, useEffect } from 'react';

import './styles/currentProjects.css'

import checkMark from './images/icons/check-mark.svg'

import {projectData} from './data/Data'

function CurrentProjects() {


  const [ selectedLocations, setSelectedLocations ] = useState([])
  const [ allFilters, setAllFilters ] = useState({
                                      sortByCompleted:false,
                                      projectCounter:0,
                                      filteredProjects: []
                                                })

  useEffect(() => {
    console.log("FIRST RENDER")
  }, [])

  useEffect(() => {
    const results = filterProjectsByLocation()
    updateFiltersState(results)
  }, [selectedLocations])

  const handleLocationButton = (e) => {
    const prjLocation = e.target.value
    if(selectedLocations.includes(prjLocation)){
    }else{
      setSelectedLocations([...selectedLocations,prjLocation]) 
    }
    const filteredResults = filterProjectsByLocation()
    updateFiltersState(filteredResults)
  }

  const filterProjectsByLocation = () => {
    const filteredProjects = []
    for(let i=0; i<projectData.length; i++){
      let loc = projectData[i].location
      if(selectedLocations.includes(loc)){
        filteredProjects.push(projectData[i])
      }
    }
    return filteredProjects
  }
 

  const updateFiltersState = (projects) => {
    setAllFilters({
      sortByCompleted:allFilters.sortByCompleted,
      projectCounter:allFilters.projectCounter,
      filteredProjects: projects
    })
  }
  
  const resetFilters = () => {
    allFilters.filteredProjects = []
  }



        return (
          <div className="form-container">  
          <div id='userForm'>
           <h1>Current Projects</h1>

              <label>Sort by completed status:</label>  
              <input
                type='checkbox'
                id='sortCompleted'
              ></input>
      
              <br />
      
              <div id='test-buttons'>
                <button value="Ghana" onClick={handleLocationButton}>Ghana</button>
                <button value="Kenya" onClick={handleLocationButton}>Kenya</button>
                <button value="Sierra Leone" onClick={handleLocationButton}>Sierra Leone</button>
                <button value="Uganda" onClick={handleLocationButton}>Uganda</button>
                <button value='' onClick={resetFilters}>Reset</button>
              </div>
 

              <div>
                <h1>{allFilters.locations}</h1>
              </div>

            <div>
              <h2>Project Count = {allFilters.projectCounter}</h2>
            </div>
          </div>
            <hr></hr>

          <div id='projectContainer'>
            <div id='projectGrid'>
              {allFilters.filteredProjects.map((item,position) => (
                <div className='projectCard'>
                <div key={position} id={position}>
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
