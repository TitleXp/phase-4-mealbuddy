import React from 'react';
import MealCard from "./MealCard"

const MealList = ({ meals }) => {

    const mappedMeals = meals.map(meal => {
        return ( 
            <MealCard key={meal.id} meal={meal} />
        )
    })

    return (
        <div>
        {mappedMeals}
        </div>
    );
}

export default MealList;
