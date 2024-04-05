import React, { useEffect } from 'react';

const Search = ({ searchString, setSearchString, defaultString }) => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchString(inputValue);
        
    };
    

    return (
        <div>
            <label htmlFor="searchInput">Search:</label>
            <input 
                type="text" 
                id="searchInput" 
                value={searchString} 
                onChange={handleInputChange} 
            />
            
        </div>
    );
};

export default Search;
