import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';

// import SearchFood from './SearchFood'


// this form needs food.id, meal.id, and quantity
const AddToMealForm = ({ meals, setMeals, foods }) => {

    // const history = useHistory()


    const [formFoodInMeal, setFormFoodInMeal] = useState({
        food: "",
        quantity: "",
        name: ""
        // name: `${meals.id}` // meal name
    })

    // const defaultForm = ''

    console.log("this is meal: ", meals)
    console.log("this is food: ", foods)

    const handleChange = (e) => {
        setFormFoodInMeal({...formFoodInMeal, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/each_food_per_meals', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formFoodInMeal),
        })
            .then((response) => {
            if (response.status === 201) {
                response.json().then(Obj => {
                setMeals(Obj)
                // history.push('/')  // where should the user go after submitting the meal?
            })      } else {
                response.json().then((error) => {
                alert(error)
                })
            }

            })
            .catch((error) => alert(error));
            setFormFoodInMeal({
                food: "",
                quantity: "",
                name: ""
            })
        };

        // this setter needs to be passed from AddToMeal
        // setFormFoodInMeal(defaultForm)

        
    return (
        <div>
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
                    name='name'
                    placeholder='Meal name' />
            <button type="submit">Add this to your meal</button>

            </form>
        </div>
    );
}

export default AddToMealForm;
