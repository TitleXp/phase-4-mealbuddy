import React, {useEffect, useState} from 'react';
import MealList from "./MealList"

const MealLog = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('/meals')
            .then(res => res.json())
            .then(data => setMeals(data))
    },[])

    // console.log(meals)

  
    return (
        <div>
            <MealList meals={meals} />
        </div>
    );
}

export default MealLog;
