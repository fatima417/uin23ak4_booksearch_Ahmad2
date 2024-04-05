import React, { useEffect } from 'react';
import '../css/main.css'
const Search = ({ searchString, setSearchString, defaultString }) => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchString(inputValue);
        
    };
    

    return (
        <div className="search-container"> {/* Apply the class for container styling */}
            <label className="search-label" htmlFor="searchInput">Search:</label> {/* Apply the class for label styling */}
            <input 
                className="search-input" // Apply the class for input styling
                type="text" 
                id="searchInput" 
                value={searchString} 
                onChange={handleInputChange} 
            />
        </div>
    );
};

export default Search;
