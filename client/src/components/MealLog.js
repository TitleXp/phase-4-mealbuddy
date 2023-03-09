import React, {useEffect, useState} from 'react';
import MealList from "./MealList"
import CreateAMealForm from "./CreateAMealForm"
import { Grid } from "semantic-ui-react"

const MealLog = ({ user, setFoods }) => {

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
        <Grid>
            <Grid.Column width={7} >
                <h1 style={{textAlign:"center"}}>{user.name}'s Meal Log</h1>
                Daily Calorie Budget: {user.calorie_goal}
                <CreateAMealForm onSubmitMeal={addMeal} user={user}/>
            </Grid.Column>

            <Grid.Column width={9}>
                <MealList meals={meals} user={user} setMeals={setMeals} setFoods={setFoods}/>
            </Grid.Column>
            
        </Grid>
    );
}

export default MealLog;
