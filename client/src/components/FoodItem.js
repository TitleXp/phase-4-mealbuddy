import React from 'react';

const FoodItem = ({food}) => {

    return (
        <div>
            {food.food_name}
            {food.carbs}
            {food.fats}
            {food.proteins}
            {food.calories}

        </div>
    );
}

export default FoodItem;
