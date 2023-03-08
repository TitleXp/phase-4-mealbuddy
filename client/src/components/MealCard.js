import React from 'react';
import MealCardItem from './MealCardItem'

const MealCard = ({meal}) => {

    // const mappedFood = meal.foods.map(food => {
    //     return (
    //         <MealCardItem key={food.id} food={food}/>
    //     )
    // })

    // const mappedQuantity = meal.each_food_per_meal.map(join_record => { 
    //     console.log("join MealCard:", join_record)
    //     return 
    //         <MealCardItem key={join_record.id} join_record={join_record}/>
    
    // })

    return (
        <div>
            {meal.name}
            {meal.date}
            {/* {mappedFood}
            {mappedQuantity} */}
 {/* <MealCardItem food={mappedFood} join_record={mappedQuantity} */}
        </div>
    );
}

export default MealCard;
