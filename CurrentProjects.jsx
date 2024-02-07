import { useState, useEffect } from 'react';

import './styles/currentProjects.css'

import checkMark from './images/icons/check-mark.svg'

import {projectData} from './data/Data'

function CurrentProjects() {
  useEffect(() => {
    setFilteredData(projectData)
  }, [])

  const [projectLocation, setprojectLocation] = useState("")
  const [projectCompletionDate, setprojectCompletionDate] = useState("")
  const [isProjectCompleted, setIsProjectCompleted] = useState(false)

  const [filteredData, setFilteredData] = useState([])

        const showAllProject = () =>{
          setFilteredData(projectData)
        }

        const handleLocationChange = (event) => {
          setprojectLocation(event.target.value);
        };
      
        const handleCompletionDateChange = (event) => {
          setprojectCompletionDate(event.target.value);
        };

        const handleIsProjectCompleted = (event) => {
          setIsProjectCompleted(!isProjectCompleted)
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          filterData()
        };

        const filterData = () => {
          const filteredData = projectData.filter(obj => obj.location === projectLocation);
          setFilteredData(filteredData);
        }
      
        return (
          <div className="form-container">
            <h1>Current Projects</h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor="location">Location:</label>
              <select id="location" name="location" value={projectLocation} onChange={handleLocationChange}>
                <option value={projectData}>Show All Projects</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Uganda">Uganda</option>
              </select>
    
              <label htmlFor="completionDate">Completion Year:</label>
              <select                 
                type="number"
                id="completionDate"
                value={projectCompletionDate}
                onChange={handleCompletionDateChange}>
                <option>-</option>  
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2005">2005</option>
                <option value="2010">2010</option>
                <option value="2035">2035</option>
              </select>    

              <label>Sort by completed status:</label>  
              <input
                type='checkbox'
                id='sortCompleted'
                onChange={handleIsProjectCompleted}
              ></input>
      
              <br />
      
              <input type="submit" value="Submit" />
              <button>Reset</button>
            </form>

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
                  <p>Goal: ${item.moneyGoal}</p> 
                  <p>Current: ${item.moneyCurrent}</p>

                  {item.moneyGoal <= item.moneyCurrent ? (
                    <div id='isCompleted'>
                      <p id='completion'><strong>Completed</strong></p>
                      <p id='completion'>{item.completionYear}</p>
                      <img id='checkMark' src={checkMark}></img>
                    </div>
                  ) : (
                    <p>Completion ETA: {item.completionYear}</p>
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
