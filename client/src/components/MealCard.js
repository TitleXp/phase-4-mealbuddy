import React from 'react';
import MealCardItem from './MealCardItem'

const MealCard = ({meal}) => {

    const mappedFood = meal.each_food_per_meal.map(food => {
        return (
            <MealCardItem key={food.id} food={food}/>
        )
    })

    return (
        <div>
            <h4>{meal.name} ...
            {meal.date}
            <button >Delete Meal</button>
            </h4>
            {mappedFood}
        </div>
    );
}

export default MealCard;
