import React, { useState } from 'react';
import './registration.css'; 
import Image from '../photos/add_a_photo_FILL0_wght400_GRAD0_opsz48 1.png';

import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);

    const fileLabel = document.getElementById('fileLabel');
    if (selectedFile) {
      fileLabel.innerText = selectedFile.name;
    } else {
      fileLabel.innerText = 'No file selected';
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRegistration = () => {
    if (name && image) {
      localStorage.setItem('userName', name);
      localStorage.setItem('userImage', URL.createObjectURL(image));
      navigate('/form', { state: { name, image: URL.createObjectURL(image) } });


    } else {
      alert('Please provide a name and image.');
    }
  };

  return (
    <div className='registration-container'>
      <h1>Get Started</h1>
      <p>add a photo</p>
      <label htmlFor="fileInput" onClick={handleImageClick}>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="User's photo" />
        ) : (
          <div className="placeholder">
            <img src={Image} alt='photos'></img>
          </div>
        )}
      </label>
      <input
        type="file"
        id="fileInput"
        accept="*/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <div id="fileLabel">No file selected</div>
      <h2>Fill in Your Name</h2>
      <input className='name' type="text" placeholder="Name" value={name} onChange={handleNameChange} />
      <button onClick={handleRegistration}>Sign In</button>
    </div>
  );
}

export default Registration;
