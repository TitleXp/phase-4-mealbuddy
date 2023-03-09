import React from 'react';
import MealCard from "./MealCard"

const MealList = ({ meals, user, setMeals, setFoods, deleteEachFoods, eachFoods }) => {

    const mappedMeals = meals.map(meal => {
        return ( 
            <MealCard key={meal.id} meal={meal} meals={meals} user={user} setMeals={setMeals} setFoods={setFoods} deleteEachFoods={deleteEachFoods} eachFoods={eachFoods} />
        )
    })

    return (
        <div>
        {mappedMeals}
        </div>
    );
}

export default MealList;
