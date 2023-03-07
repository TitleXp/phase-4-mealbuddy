import React from 'react'

 function MealCardItem({ food, join_record }) {

    console.log("join record MealCardItem:", join_record)
  return (
    <div>{food.food_name}
    {food.calories}
    {food.carbs}
    {food.fats}
    {food.proteins}
   quantity{join_record}</div>
  )
}

export default MealCardItem
