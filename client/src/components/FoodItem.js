import React from 'react';

const FoodItem = ({food}) => {

    return (
        <tr>
            <td> {food.food_name}</td>
            <td> {food.calories}</td>
            <td> {food.carbs}</td>
            <td> {food.fats}</td>
            <td> {food.proteins}</td>    
        </tr>
    );
}

export default FoodItem;
