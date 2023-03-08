import React from 'react';
import MealCard from "./MealCard"

const MealList = ({ meals, user, setMeals, setFoods }) => {

    const mappedMeals = meals.map(meal => {
        return ( 
            <MealCard key={meal.id} meal={meal} user={user} setMeals={setMeals} setFoods={setFoods} />
        )
    })

    return (
        <div>
        {mappedMeals}
        </div>
    );
}

export default MealList;
