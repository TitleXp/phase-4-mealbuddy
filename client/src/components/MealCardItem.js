import React from 'react'
import { useState, useEffect } from 'react'
import QuantityEditForm from './QuantityEditForm'

 function MealCardItem({ food, user, setFoods }) {


  const [ eachFoods, setEachFoods] = useState([])


  useEffect(() => { // GET each foods
    fetch('/each_food_per_meals')
    .then(res => res.json())
    .then(data => setEachFoods(data))
  }, [])

   
   const [ showEditQtyForm, setShowEditQtyForm ] = useState(true)
   
   const handleClick = () => {
     setShowEditQtyForm(currentValue => !currentValue)
    }
    
    const [ editQuantity, setEditQuantity ] = useState({
      quantity: food.quantity
    })

    const handleChange = (e) => {
      setEditQuantity({...editQuantity, [e.target.name]: e.target.value})
    }

  console.log ("this is eachfoods ", eachFoods)

  const handleDeleteFood = () => { // delete each food per meal
    fetch(`/each_food_per_meals/${food.id}`, {
        method: "DELETE"
    })
    // console.log(food)
    // setFoods(currentFoods => currentFoods.filter(element => element.id !== food.id))
    setEachFoods(currentEachFoods => 
      // console.log(currentEachFoods))
       currentEachFoods.filter(element => element.id !== eachFoods.id))

   
}

// console.log(food)

const { id } = food
// console.log(id)
// console.log(food.quantity)

// const handleEditQuantity = (e) => {
//     e.preventDefault()
//     fetch(`/each_food_per_meals/${food.id}`,{
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(editQuantity),
//     })
//     .then(response => {
//       if(response.ok) {
//         response.json()
//         .then(editQty => {
//           setFoods(currentFoods => {
//             const updatedQuantity = currentFoods.map(qty =>{
//               return qty.id === id ? editQty : qty
//             })
//             return updatedQuantity
//           })
//         })
//       }
//     })
// }

const handleEditQuantity = (e) => {
  e.preventDefault();
  // console.log('handleEditQuantity function called')
  fetch(`/each_food_per_meals/${food.id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editQuantity),
  })
  .then(editQty => {
    setEachFoods(currentFoods => {
      const updatedQuantity = currentFoods.map(food => {
        return food.id === id ? editQty : eachFoods;
      });
      return updatedQuantity;
    });
  })
} 



  return (
    <div>
      {food.food.food_name}
      Calories: {food.food.calories}
      Carbs: {food.food.carbs}
      Fats: {food.food.fats}
      Proteins: {food.food.proteins}
      Quantity{food.quantity}

      {showEditQtyForm ? 
      <button onClick={handleClick}>Edit quantity</button> :
      // 'edit quantity' form here
      <> 
        <button onClick={handleClick}>cancel change</button>
        <form onSubmit={handleEditQuantity}>

          <input type="number" name="quantity" value={editQuantity.quantity} onChange={handleChange}/>
          <input type="submit" value="update" />
        </form>
      </>
      }

      <br/>
      by: {user.username}
      <button onClick={handleDeleteFood}>Delete food within this meal</button>
    </div>
  )
}

export default MealCardItem
