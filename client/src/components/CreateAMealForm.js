import React, {useState} from 'react'



const CreateAMealForm = ({onSubmitMeal, user}) => {

    const defaultInputs = {
        name: '',
        date: Date(),
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
            .then(setMealForm(defaultInputs))
    }

    const postMeal = () => {
        const config = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...mealForm,
            // user_id: mealForm.user_id
          })
        }
        return fetch('/meals', config)
            .then(response => response.json())
    }

    const { name, date, user_id } = mealForm


  return (
    <div style={{marginRight: "90px"}}>
        <h4></h4>
        <h4>Create a meal name and date</h4>
        <form class='ui form' onSubmit={handleSubmit}>
            <label>Meal Name:</label>
            <input value={name} onChange={handleChange} type="text" name="name" placeholder="Brkfst/Lnch/Dnnr/Snack" required/>
            <label>Meal Date:</label>
            <input value={date} onChange={handleChange} type="date" name="date" required/>
        <button style={{marginTop: "10px"}} class="ui button" type="submit">Add this meal to your profile</button>
        </form>

    </div>
  )
}

export default CreateAMealForm