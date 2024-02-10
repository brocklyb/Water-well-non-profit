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

  const [projectCounter, setProjectCounter] = useState(0)

        const countData = () => {
          const count = filteredData.length
          setProjectCounter(count)
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
          //incase user does not use selection box on first render and clicks submit
          if(projectLocation == ""){
            setprojectLocation('ALL')
          }
          const allFilters = [projectLocation, projectCompletionDate, isProjectCompleted]
          console.log(allFilters)
          filterData()
          countData()
        };

        const filterData = () => {
          //const filteredData = projectData.filter(obj => obj.location === projectLocation);
          //setFilteredData(filteredData);
          
          if(projectLocation == "ALL" && projectCompletionDate == "" && isProjectCompleted == false){
            //const filterMe = projectData.filter(obj => obj.location === projectLocation);
            setFilteredData(projectData); 

          }else if(projectLocation == "ALL" && projectCompletionDate == "" && isProjectCompleted == true){
            const filterMe1 = projectData.filter(obj => obj.isCompleted == isProjectCompleted);
            console.log(filterMe1)
            setFilteredData(filterMe1); 
            console.log('ALL and True')

          }else{
            const filterMe2 = projectData.filter(obj => obj.location === projectLocation);
            setFilteredData(filterMe2); 
          }
          setProjectCounter(filteredData.length)
          
          
        }
      
        return (
          <div className="form-container">  
          <div id='userForm'>
           <h1>Current Projects</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="location">Location:</label>
              <select id="location" name="location" value={projectLocation} onChange={handleLocationChange}>
                <option value='ALL'>Show All Projects</option>
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
                <option value="">-</option>  
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
        
            </form>

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
