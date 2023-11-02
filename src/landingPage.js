import React from 'react';
import './landingPage.css';
import image from './photos/pngegg 1.png';
function LandingPage() {
  return (
    <div className="landing-page">
      <img src={image} alt='logo'/>
      <h1>Get Started Today</h1>
      <button>Get Started</button>
    </div>
  );
}

export default LandingPage;
