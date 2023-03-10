import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

// this form needs food.id, meal.id, and quantity
const AddToMealForm = ({ setMeals }) => {

    const [ meals, setMealss ] = useState([])
    const [ foods, setFoods ] = useState([])
    const [ mealId, setMealId ] = useState("")
    const [ foodId, setFoodId ] = useState([])
    const [ quantity, setQuantity ] = useState([])

    const formData = {
        meal_id: mealId,
        food_id: foodId,
        quantity
    };
    
    const { history } = useHistory()
    
    useEffect(() => { // fetch meals
        fetch("/meals")
        .then((r) => r.json())
        .then(setMealss);
    }, []);

    useEffect(() => { // fetch foods
        fetch("/foods")
        .then((r) => r.json())
        .then(setFoods);
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
            fetch("/each_food_per_meals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then((r) => {
                if (r.ok) {
                    r.json().then(Obj => {
                        setMeals(Obj);
                        setMealId('')
                        setFoodId('')
                        setQuantity('')
                    })
                    history.push("/meals")
                } else {
             r.json().then((error) => {
                alert(error)
            }
            )
            // r.json().then((err) => setFormErrors(err.errors))
        }
    });
}

                            
                            
                            
    return (
        <div>
            <form class="ui form" onSubmit={handleSubmit} >
                <div class="equal width fields" >
                   <div class="field" > 
                        <label htmlFor="meal_id">Meal:</label>
                        <select
                            // id=""
                            name="meal_id"
                            value={mealId}
                            onChange={(e) => setMealId(e.target.value)}
                            required
                            >
                            <option value="">Select a Meal</option>
                            {meals.map((meal) => (
                                <option key={meal.id} value={meal.id}>
                                {meal.name}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div class="field" >
                        <label htmlFor="food_id">Food:</label>
                        <select
                            // id=""
                            name="food_id"
                            value={foodId}
                            onChange={(e) => setFoodId(e.target.value)}
                            required
                        >
                            <option value="">Select a Food</option>
                            {foods.map((food) => (
                            <option key={food.id} value={food.id}>
                                {food.food_name}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div class="field" >
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            // id="number"
                            name="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        required />
                    </div>
                    <button style={{alignContent: "center"}} class="ui button" type="submit">+</button>
                </div>
            </form>
        </div>
    );
}

export default AddToMealForm;
