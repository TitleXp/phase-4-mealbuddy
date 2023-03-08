import React from 'react'

// need setFoods here
 function MealCardItem({ food, user, setFoods }) {


  console.log ("this is food ", food)

  const handleDeleteFood = () => {
    fetch(`/each_food_per_meals/${food.id}`, {
        method: "DELETE"
    })
    setFoods(currentFood => currentFood.filter(element => element.id !== food.id))
}

const handleEditQuantity = () => {


}

  return (
    <div>
      {food.food.food_name}
      Calories: {food.food.calories}
      Carbs: {food.food.carbs}
      Fats: {food.food.fats}
      Proteins: {food.food.proteins}
      Quantity{food.quantity}
      <button onClick={handleEditQuantity}>Edit quantity</button>
      <br/>
      by: {user.username}
      <button onClick={handleDeleteFood}>Delete food within this meal</button>
    </div>
  )
}

export default MealCardItem
