import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './form.css';
function Form() {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  const { name, image } = state || {};

  const handleImageClick = () => {
    // Navigate to /popup when the photo is clicked
    navigate('/popup');
  };

  return (
    <div className="form-container">
        <div className='header'>
            <h1>Form</h1>
            <p>API</p>
        </div>
        <div className="content">
            {name && <p>Your Name: {name}</p>}
            {image && (
                <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                <img src={image} alt="Your Uploaded Photo" />
                </div>
            )}
        </div>
    </div>
  );
}

export default Form;
