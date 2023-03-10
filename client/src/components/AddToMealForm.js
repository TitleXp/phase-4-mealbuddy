import React, { useState, useEffect } from 'react';


// this form needs food.id, meal.id, and quantity
const AddToMealForm = ({ setMeals }) => {

    const [ foods, setFoods ] = useState([])
    const [ meals, setMealss ] = useState([])
    const [ mealId, setMealId ] = useState("")
    const [ foodId, setFoodId ] = useState([])
    const [ quantity, setQuantity ] = useState([])

    const formData = {
        meal_id: mealId,
        food_id: foodId,
        quantity,
    };

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
                    setMeals(Obj)
                    // setFormData(formData)
                })
                // history.push()
        } else {
             r.json().then((error) => {
                alert(error)
        }
        )
      }
    });
      }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="meal_id">Meal:</label>
                    <select
                        // id=""
                        name="meal_id"
                        value={mealId}
                        onChange={(e) => setMealId(e.target.value)}
                    >
                        <option value="">Select a Meal</option>
                        {meals.map((meal) => (

                        <option key={meal.id} value={meal.id}>

                            {meal.name} - {meal.date}



                        </option>
                        ))}
                    </select>
                    <label htmlFor="food_id">Food:</label>
                    <select
                        // id=""
                        name="food_id"
                        value={foodId}
                        onChange={(e) => setFoodId(e.target.value)}
                    >
                        <option value="">Select a Food</option>
                        {foods.map((food) => (
                        <option key={food.id} value={food.id}>
                            {food.food_name}
                        </option>
                        ))}
                    </select>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        // id="number"
                        name="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
            <button type="submit">Add this to your meal</button>

            </form>
        </div>
    );
}

export default AddToMealForm;
