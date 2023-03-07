import React, {useEffect, useState} from 'react';
import AddToMealForm from './AddToMealForm'
import CreateAFoodForm from './CreateAFoodForm'
import FoodList from './FoodList'




const AddToMeal = () => {

    const [foods, setFoods] = useState([]) // foods array
    const [meals, setMeals] = useState([]) // meals array for the form

    useEffect(() => { // GET foods
        fetch('/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
      }, [])

    useEffect(() => { // GET meals for the form
        fetch('/meals')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, [] )

   return (
       <div>
           <AddToMealForm meals={meals}/>
           <CreateAFoodForm/>
           <FoodList foods={foods}/>
       </div>
   );
}


export default AddToMeal;