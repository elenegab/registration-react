import React, { useState } from 'react';
import './registration.css'; // You can create a CSS file for styling
import Image from '../photos/add_a_photo_FILL0_wght400_GRAD0_opsz48 1.png';

function Registration() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
    // Trigger the file input when the image is clicked
    document.getElementById('fileInput').click();
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  
    // To display the selected file's name
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

  
  
//   // ...
 
  
  // <label htmlFor="fileInput" onClick={handleImageClick}>
  //   <div className="placeholder" id="fileLabel">
  //     No file selected
  //   </div>
  // </label>
  

  

  const handleRegistration = () => {
    // Validate the input, then store it in localStorage
    if (name && image) {
      localStorage.setItem('userName', name);
      // You can use a unique key to store the image in localStorage
      // For simplicity, you might consider using a backend or cloud storage for images in a production app
      localStorage.setItem('userImage', URL.createObjectURL(image)); // Store the image URL
      // Redirect to the next page
      // You can use React Router to navigate to the next page
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

