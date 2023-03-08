import React, {useState} from 'react';
import SearchFood from './SearchFood'


const AddToMealForm = ({meals, setMeals}) => {

    const [searchFood, setSearchFood] = useState([])
    const [formFoodInMeal, setFormFoodInMeal] = useState({
        food: "",
        quantity: "",
        meal_name: ""
    })

    // const defaultForm = ''
    
    // function handleChange(e) {
    //     setFormFoodInMeal(e.target.value);
    // }

    const handleChange = (e) => {
        setFormFoodInMeal({...formFoodInMeal, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formFoodInMeal),
        })
            .then((response) => {
            if (response.status === 201) {
                response.json().then(userObj => {
                setFormFoodInMeal(userObj)
                // history.push('/')  // where should the user go after submitting the meal?
            })      } else {
                response.json().then((error) => {
                alert(error)
                })
            }
            })
            .catch((error) => alert(error));
        };

        // this setter needs to be passed from AddToMeal
        // setFormFoodInMeal(defaultForm)

    return (
        <div>
            Search foods:
            <SearchFood searchFood={searchFood} handleSearch={setSearchFood}/>
            <form onSubmit={handleSubmit} >
                Food:
                <input onChange={handleChange}
                    value={formFoodInMeal.food}
                    type='text'
                    name='food'
                    placeholder='Food name' />
                Quantity:
                <input onChange={handleChange}
                    value={formFoodInMeal.quantity}
                    type='number'
                    name='quantity'
                    placeholder='quantity' />
                Meal Name:
                <input onChange={handleChange}
                    value={formFoodInMeal.name}
                    type='text'
                    name='meal_name'
                    placeholder='Meal name' />
            <button type="submit">Add this to your meal</button>

            </form>
        </div>
    );
}

export default AddToMealForm;
