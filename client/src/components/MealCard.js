import React from 'react';
import MealCardItem from './MealCardItem'
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const MealCard = ({ meal, meals, user, setMeals, setFoods, deleteEachFoods, eachFoods }) => {

    // const { id } = useParams()

    // useEffect(() => {
    //     if (!meal) {
    //         fetch(`/meals/${id}`)
                    // .then(response => response.json())
                    // .then(mealObj => setMeals(mealObj))
                    // .catch(error => alert(error))
    //     }
    // }, [meal, id]);

    // console.log(meal)

    const mappedFood = meal.each_food_per_meal.map(food => {
        return (
            <MealCardItem key={food.id} food={food} meals={meals} user={user} setFoods={setFoods} deleteEachFoods={deleteEachFoods} eachFoods={eachFoods} setMeals={setMeals} meal={meal}/>
        )
    })

    const handleDeleteMeal = () => {
        fetch(`/meals/${meal.id}`, {
            method: "DELETE"
        })
        setMeals(currentMeal => currentMeal.filter(element => element.id !== meal.id))

    }

    
    return (
        <div style={{padding: "12px"}}>
            <label>
                <th>
                    <h3 style={{padding: "12px"}} >{meal.name}-{meal.date}</h3>
                </th>
            </label>
            <table class="ui table" >
                <thead>
                    <tr>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Carbs</th>
                        <th>Fats</th>
                        <th>Protein</th>
                        <th>Qty</th>
                        <th><button class="ui mini button" onClick={handleDeleteMeal} >Delete Meal</button></th>
                    </tr>
                </thead>
                <tbody>
                    {mappedFood}
                </tbody>
            </table>
        </div>
    );
}

export default MealCard;

