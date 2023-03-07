import React from 'react';
import FoodItem from './FoodItem'

const FoodList = ({foods}) => {

    const mappedFoods = foods.map(food => {
        return (
            <FoodItem key={food.id} food={food}/>
        )
    })

    return (
        <div>
            {mappedFoods}
        </div>
    );
}

export default FoodList;
