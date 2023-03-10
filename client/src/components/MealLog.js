import React, {useEffect, useState} from 'react';
import MealList from "./MealList"
import CreateAMealForm from "./CreateAMealForm"
import {Grid} from 'semantic-ui-react'

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
        <>
    <Grid>
       <Grid.Row columns={2} >
            <Grid.Column floated="left" >
                <h1 style={{padding: "12px", textAlign:"center"}}>{user.name}'s Meal Log</h1>
                <h1 style={{padding: "12px", textAlign:"center"}} class="ui huge header" >Daily Calorie Budget: {user.calorie_goal}</h1>
            </Grid.Column>
            <Grid.Column floated="right" >
                <CreateAMealForm onSubmitMeal={addMeal} user={user}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
            <MealList meals={meals} user={user} setMeals={setMeals} setFoods={setFoods}/>
        </>  
  );
}

export default MealLog;
