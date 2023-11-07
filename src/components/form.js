
 
    import React, { useState } from 'react';
    import { useLocation, useNavigate } from 'react-router-dom';
    import './form.css';

    function Form() {
    const location = useLocation();
    const navigate = useNavigate();

    const { state } = location;
    const { name, image } = state || {};

    const handleImageClick = () => {
        navigate('/popup');
    };

    const handleApiClick = () => {
        navigate('/api')
    }
    // State to manage the search input value
    const [searchInput, setSearchInput] = useState('');

    // Handler for updating the search input
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Handler for searching (you can customize this logic)
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Perform the search logic here based on the searchInput value
        console.log('Search performed:', searchInput);
        // You can add the logic to fetch data from an API or update the UI as needed.
    };

    return (
        <>
            <div className="form-container">
            <div className='header'>
                <h1>Form</h1>
                <p onClick={handleApiClick}>API</p>
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

                {/* Search bar */}
                <form onSubmit={handleSearchSubmit}>
                <button type="submit">filter</button>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />

                </form>
        </>
    );
    }

    export default Form;

    