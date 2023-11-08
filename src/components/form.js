
 
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
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search performed:', searchInput);
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
                    <img src={image} alt=''/>
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

    