import React from 'react';
import './Popup.css';

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={props.onClose}>
          Close
        </button>
        <button className="logout-button" onClick={props.onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Popup;
