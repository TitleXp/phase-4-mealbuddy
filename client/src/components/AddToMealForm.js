import React, {useState} from 'react';
import SearchFood from './SearchFood'


const AddToMealForm = ({meals, setEachFood}) => {

    const [searchFood, setSearchFood] = useState([])
    const [formFoodInMeal, setFormFoodInMeal] = useState('')

    const defaultForm = ''
    
    function handleChange(e) {
        setFormFoodInMeal(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEachFood({}) // this setter needs to be passed from AddToMeal
        // setFormFoodInMeal(defaultForm)
    }

    return (
        <div>
            Search foods:
            <SearchFood searchFood={searchFood} handleSearch={setSearchFood}/>
            <form onSubmit={handleSubmit} >
                Food:
                <input onChange={handleChange}
                    value={searchFood}
                    type='text'
                    name=''
                    placeholder='' />
                Quantity:
                <input onChange={handleChange}
                    value={searchFood}
                    type='number'
                    name=''
                    placeholder='' />
                Meal Name:
                <input onChange={handleChange}
                    value={searchFood}
                    type='text'
                    name=''
                    placeholder='' />
            <button type="submit">Add this to your meal</button>

            </form>
        </div>
    );
}

export default AddToMealForm;
