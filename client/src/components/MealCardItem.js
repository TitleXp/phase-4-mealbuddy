import React from 'react'

 function MealCardItem({ food}) {
  return (
    <div>
      {food.food.food_name}
      Calories: {food.food.calories}
      Carbs: {food.food.carbs}
      Fats: {food.food.fats}
      Proteins: {food.food.proteins}
      Quantity{food.quantity}
      <button>Delete food within this meal</button>
    </div>
  )
}

export default MealCardItem
