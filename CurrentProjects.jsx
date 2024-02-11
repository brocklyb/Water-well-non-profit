import { useState, useEffect } from 'react';

import './styles/currentProjects.css'

import checkMark from './images/icons/check-mark.svg'

import {projectData} from './data/Data'

function CurrentProjects() {
  useEffect(() => {
    handleShowAll()
  }, [])



  const [isProjectCompleted, setIsProjectCompleted] = useState(false)
  const [filteredData, setFilteredData] = useState([])
  const [projectCounter, setProjectCounter] = useState(0)
  const [locationList,setLocationList] = useState([])

        const countData = () => {
          const count = filteredData.length
          setProjectCounter(count)
        }

        const handleIsProjectCompleted = (event) => {
          setIsProjectCompleted(!isProjectCompleted)
        }
      

        /* 
        const handleFilterData = () => {
          const data = []
          for(let i=0; i<projectData.length; i++){
            //user wants to sort by ONLY completed projects 
            if(isProjectCompleted){
              if(projectData[i].location === projectLocation && projectData[i].isCompleted == isProjectCompleted){
                data.push(projectData[i])
              }
            //if user does NOT want to sort by completion
            }else if(!isProjectCompleted){
              if(projectData[i].location === projectLocation){
                data.push(projectData[i])
              }
            }
          }
          setFilteredData(data)
          console.log(data)
        }
*/

        const handleSetFilteredData = (data) =>{
          setFilteredData(data)
        }


        const handleFilterData = () => {
          const testSelectedData = []
          for(let i=0; i<projectData.length; i++){
            const Location = projectData[i].location 

            if(locationList.includes(Location)){
              //console.log(projectData[i])
              testSelectedData.push(projectData[i])
            }
          }
          handleSetFilteredData(testSelectedData)
          console.log(filteredData)
          countData()
        }

        let previousLocationClicked = ""
        const handleLocationButton = (e) => {
          const prjLocation = e.target.value
          previousLocationClicked = prjLocation

          if(locationList.includes(prjLocation)){
          }else{
            setLocationList([...locationList, prjLocation])
          }
          handleFilterData()
        }

        const handleShowAll = (e) => {
          setFilteredData(projectData)
        }

        const handleReset = () => {
          setLocationList([])
          handleShowAll()
        }

        return (
          <div className="form-container">  
          <div id='userForm'>
           <h1>Current Projects</h1>

              <label>Sort by completed status:</label>  
              <input
                type='checkbox'
                id='sortCompleted'
                onChange={handleIsProjectCompleted}
              ></input>
      
              <br />
      
              <div id='test-buttons'>
                <button onClick={handleShowAll}>Show All Projects</button>
                <button value="Ghana" onClick={handleLocationButton}>Ghana</button>
                <button value="Kenya" onClick={handleLocationButton}>Kenya</button>
                <button value="Sierra Leone" onClick={handleLocationButton}>Sierra Leone</button>
                <button value="Uganda" onClick={handleLocationButton}>Uganda</button>
                <button onClick={handleReset}>RESET</button>
              </div>
              

              <div>
                <h1>{locationList}</h1>
              </div>

            <div>
              <h2>Project Count = {projectCounter}</h2>
            </div>
          </div>
            <hr></hr>

          <div id='projectContainer'>
            <div id='projectGrid'>
              {filteredData.map((item,position) => (
                <div className='projectCard'>
                <div id={position}>
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
