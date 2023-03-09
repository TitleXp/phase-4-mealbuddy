import React, {useState} from 'react'

const CreateAMealForm = ({onSubmitMeal, user}) => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`; // returns a string like "2023-03-09"
    console.log(dateString); // output: "2023-03-09"
    

    const defaultInputs = {
        name: '',
        date: Date(dateString), //dateString,
        user_id: user.id
    }
        
    const [mealForm, setMealForm] = useState(defaultInputs)

    
    const handleChange = e => {
        setMealForm({...mealForm, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        postMeal()
            .then(onSubmitMeal)
    }

    const postMeal = () => {
        const config = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...mealForm,
          })
        }
        return fetch('/meals', config)
            .then(response => response.json())
    }

    const { name, date, user_id } = mealForm


  return (
    <div>
        Create a meal name and date
        <form onSubmit={handleSubmit}>
            Meal Name:
            <input value={name} onChange={handleChange} type="text" name="name" placeholder="Brkfst/Lnch/Dnnr/Snack" required/>
            Meal Date:
            <input value={date} onChange={handleChange} type="date" name="date" required/>
            {/* <br/> */}
            {/* by: {user.name} */}
            <br/>
        <button type="submit">Add this meal to your profile</button>
        </form>
    </div>
  )
}

export default CreateAMealForm