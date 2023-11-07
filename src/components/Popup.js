import React from 'react';
import './Popup.css';
import { useNavigate } from 'react-router-dom';

function Popup(props) {


const navigate = useNavigate();

const handleClose = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  const handleLogout = () => {
    // Navigate to the "LandingPage"
    navigate('/');
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Popup;
