import React, { useEffect } from 'react';
import '../css/main.css'
const Search = ({ searchString, setSearchString, defaultString }) => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchString(inputValue);
        
    };
    

    return (
        <div className="search-container"> 
            <label className="search-label" htmlFor="searchInput">Search:</label> 
            <input 
                className="search-input" 
                type="text" 
                id="searchInput" 
                value={searchString} 
                onChange={handleInputChange} 
            />
        </div>
    );
};

export default Search;
