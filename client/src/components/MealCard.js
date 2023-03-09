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
        <div>
            <table class="ui celled definition compact table" >
                <tr>
                    <td>{meal.name}-{meal.date}</td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>Calories</td>
                    <td>Carbs</td>
                    <td>Fats</td>
                    <td>Protein</td>
                    <td>Qty</td>
                    <td><button class="ui mini button" onClick={handleDeleteMeal} >Delete Meal</button></td>
                </tr>
                <tr>{mappedFood}</tr>
                
            </table>
        </div>
    );
}

export default MealCard;
