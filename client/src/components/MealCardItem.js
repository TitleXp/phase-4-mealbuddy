import React from 'react'
import { useState, useEffect } from 'react'
import QuantityEditForm from './QuantityEditForm'

 function MealCardItem({ food, user, setFoods, setMeals, meals, meal }) {


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

  const handleDeleteFood = () => { // delete each food per meal
    fetch(`/each_food_per_meals/${food.id}`, {
        method: "DELETE"
    })
      setMeals(meals.map(m => {
        if(m.id === meal.id) {
          const filteredFoods = m.each_food_per_meal.filter(f => f.id !== food.id)
          return {
            ...m, each_food_per_meal: filteredFoods }
        } else {
          return m
        }
      }))
  }

const { id } = food


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
    setMeals(meals.map(m => {
      if(m.id === meal.id) {
        const mappedFoods = m.each_food_per_meal.map(f => f.id == food.id ? {...f, quantity: editQuantity.quantity} : f)
        return {
          ...m, each_food_per_meal: mappedFoods }
      } else {
        return m
      }
    }))
    // .then(editQty => {
    //   setEachFoods(currentFoods => {
    //     const updatedQuantity = currentFoods.map(food => {
    //       return food.id === id ? editQty : eachFoods;
    //     });
    //     return updatedQuantity;
    //   });
    // })
  } 



  return (
    <tr>
        <td><h3>{food.food.food_name}</h3></td>
        <td><h3>{food.food.calories}</h3></td>
        <td><h3>{food.food.carbs}</h3></td>
        <td><h3>{food.food.fats}</h3></td>
        <td><h3>{food.food.proteins}</h3></td>
        <td><h3>{food.quantity}</h3></td>

        <td>{showEditQtyForm ? 
        <button class="ui mini button" onClick={handleClick}>Edit quantity</button> :
        // 'edit quantity' form here
        <>
          <button class="ui mini button" onClick={handleClick}>cancel change</button>
            <form onSubmit={handleEditQuantity}>
              <input class="ui input" type="number" name="quantity" value={editQuantity.quantity} onChange={handleChange}/>
              <input type="submit" value="update" />
            </form>
        </>
        }
          <button class="ui mini button" onClick={handleDeleteFood}>x</button>
        </td>
      </tr>
  )
}

export default MealCardItem
