
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate,  } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Registration from './components/registration';
import Popup from './components/Popup'; 
import Form from './components/form'; 
import ApiPage from './components/ApiPage'; // Import your ApiPage component

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/form" element={<Form />}/>
          <Route path="/popup" element={<Popup />} />
          <Route path="/api" element={<ApiPage />} /> {/* Add this route for the ApiPage */}
          <Route path="/*" element={<Navigate to="/" />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
