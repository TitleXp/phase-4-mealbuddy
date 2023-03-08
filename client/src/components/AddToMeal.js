import React, {useEffect, useState} from 'react';
import AddToMealForm from './AddToMealForm'
import CreateAFoodForm from './CreateAFoodForm'
import FoodList from './FoodList'
import SearchFood from './SearchFood';


const AddToMeal = ({ foods, meals, setMeals }) => {

    // const [foods, setFoods] = useState([]) // foods array
    // const [meals, setMeals] = useState([]) // meals array for the form
    const [searchFood, setSearchFood] = useState("")

    // useEffect(() => { // GET foods
    //     fetch('/foods')
    //     .then(res => res.json())
    //     .then(data => setFoods(data))
    //   }, [])

    // useEffect(() => { // GET meals for the form
    //     fetch('/meals')
    //     .then(res => res.json())
    //     .then(data => setMeals(data))
    // }, [] )

    // const filteredFoods = foods.filter(food => (food.food_name.includes(searchFood)))
    const filteredFoods = foods.filter(food => (food.food_name.toLowerCase().includes(searchFood.toLowerCase())))


   return (
       <div>
           Add a food to an existing meal:
           <AddToMealForm meals={meals} setMeals={setMeals} foods={foods}/>
           <br/>
           Search foods:
            <SearchFood searchFood={searchFood} setSearchFood={setSearchFood} />
            <br/>
           All foods in database:
           <FoodList foods={filteredFoods}/>
           <CreateAFoodForm/>

       </div>
   );
}


export default AddToMeal;