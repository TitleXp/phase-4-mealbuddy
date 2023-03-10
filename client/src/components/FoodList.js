import React from 'react';
import FoodItem from './FoodItem'

const FoodList = ({foods}) => {

    const mappedFoods = foods.map(food => {
        return (
            <FoodItem key={food.id} food={food}/>
        )
    })

    return (
        <div style={{margin: "20px"}}>
            <label>All Foods</label>
            <table class="ui celled table" >
                <thead>
                    <th>Food</th>
                    <th>Calories</th>
                    <th>Carbs</th>
                    <th>Fats</th>
                    <th>Proteins</th>
                </thead>
                {mappedFoods}
            </table>
            
        </div>
    );
}

export default FoodList;
