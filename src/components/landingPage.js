import React from 'react';
import image from '../photos/pngegg 1.png';
import './landingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: 'blue', 
    color: 'white', 
    textDecoration: 'none', 
    borderRadius: '5px', 
  };

  return (
    <div className="landing-page">
      <img src={image} alt="logo" />
      <h1>Get Started Today</h1>
      <Link to="/registration" style={buttonStyle}>
        Get Started
      </Link>
    </div>
  );
}

export default LandingPage;

