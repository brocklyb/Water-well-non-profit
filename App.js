import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './styles/app.css'

import Navbar from './Navbar'
import AboutUs from './AboutUs'
import Contact from './Contact'
import CurrentProjects from './CurrentProjects'
import DonationPage from './DonationPage'
import Home from './Home'
import ProjectInformation from './projectInformation';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/currentprojects' element={<CurrentProjects />} />
        <Route path='/donation' element={<DonationPage />} />
        <Route path='/projectInformation/:id' element={<ProjectInformation />} />
      </Routes>
    </div>
  );
}

export default App;
