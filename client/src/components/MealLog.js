import React, {useEffect, useState} from 'react';
import MealList from "./MealList"
import CreateAMealForm from "./CreateAMealForm"

const MealLog = ({user}) => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('/meals')
            .then(res => res.json())
            .then(data => setMeals(data))
    },[])

    const addMeal = newMeal => {
        setMeals([...meals, newMeal])
    }
  
    return (
        <div>
            <h1>{user.name}'s Meal Log</h1>
            Daily Calorie Budget: {user.calorie_goal}
            <CreateAMealForm onSubmitMeal={addMeal} user={user}/>
            <MealList meals={meals} />
        </div>
    );
}

export default MealLog;
