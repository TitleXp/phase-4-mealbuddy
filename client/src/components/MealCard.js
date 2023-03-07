import React from 'react';
import MealCardItem from './MealCardItem'

const MealCard = ({meal}) => {

    const mappedFood = meal.foods.map(food => {
        return (
            <MealCardItem key={food.id} food={food}/>
        )
    })

    const mappedQuantity = meal.each_food_per_meal.map(join_record => { 
        console.log("join MealCard quantity:", join_record.quantity)
        return 
            <MealCardItem key={join_record.id} join_record={join_record}/>
    
    })

    return (
        <div>
            {meal.name}
            {meal.date}
            {mappedFood}
            {mappedQuantity}
 {/* <MealCardItem key={food.id} food={food} join_record */}
        </div>
    );
}

export default MealCard;
