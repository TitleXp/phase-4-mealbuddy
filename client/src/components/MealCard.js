import React from 'react';
import MealCardItem from './MealCardItem'


const MealCard = ({ meal, meals, user, setMeals, setFoods, deleteEachFoods, eachFoods }) => {


    const mappedFood = meal.each_food_per_meal.map(food => {
        return (
            <MealCardItem key={food.id} food={food} meals={meals} user={user} setFoods={setFoods} deleteEachFoods={deleteEachFoods} eachFoods={eachFoods} setMeals={setMeals} meal={meal}/>
        )
    })

    const handleDeleteMeal = () => {
        fetch(`/meals/${meal.id}`, {
            method: "DELETE"
        })
        setMeals(currentMeal => currentMeal.filter(element => element.id !== meal.id))

    }

    
    return (
        <div>
            <h4>{meal.name} ...
            {meal.date}
            <button onClick={handleDeleteMeal} >Delete Meal</button>
            </h4>
            {mappedFood}
        </div>
    );
}

export default MealCard;
