import React from 'react';

const SearchFood = ({searchFood, handleSearch}) => {
    return (
        <div>
            <input
                value={searchFood}
                type='text'
                id='search'
                placeholder='Search for foods'
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchFood;
