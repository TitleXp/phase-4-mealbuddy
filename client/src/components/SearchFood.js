import React from 'react';

const SearchFood = ({searchFood, setSearchFood}) => {

    const handleChange = (e) => {
        setSearchFood(e.target.value)
    }

    // const handleChange = (e) => {
    //     setSearchFood({...searchFood, [e.target.name]: e.target.value})
    //   }

    return (
        <div>
            <input
                value={searchFood}
                type='text'
                placeholder='Search for foods'
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchFood;
