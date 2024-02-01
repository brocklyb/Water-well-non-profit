import { useState, useEffect } from 'react';

import './styles/currentProjects.css'

import projectData from './data/projectData.json'

function CurrentProjects() {
  const [displayData, setDisplayData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    setDisplayData(projectData)
  }, []);


  const filterData = () =>{
    setFilteredData(displayData[1].location)
  }


  return (
    <div>
      <button onClick={filterData}>Filter Data</button>
        <div>
              {displayData.length > 0 ? (
                displayData.map((dataItem, index) => (
                  <div key={index}>
                    <h1>{dataItem.location}</h1>
             
                  </div>
                ))
              ) : (
                <p>No data available</p>
              )}
            </div>


            <div>
              {filteredData.length > 0 ? (
                filteredData.map((dataItem, index) => (
                  <div key={index}>
                    <h1>{dataItem.location}</h1>
             
                  </div>
                ))
              ) : (
                <p>No data available</p>
              )}
            </div>

    </div>
  );
}

export default CurrentProjects;
