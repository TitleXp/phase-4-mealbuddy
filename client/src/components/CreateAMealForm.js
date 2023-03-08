import React, {useState} from 'react'

const defaultInputs = {
    name: '',
    date: Date()
}

const CreateAMealForm = () => {

    const [mealForm, setMealForm] = useState(defaultInputs)

    const handleChange = e => {
        setMealForm({...mealForm, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        postMeal()
        //     .then(onSubmitMeal)
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

    const { name, date } = mealForm

  return (
    <div>
        Create a meal name and date
        <form onSubmit={handleSubmit}>
            Meal Name:
            <input value={name} onChange={handleChange} type="text" name="name" placeholder="Brkfst/Lnch/Dnnr/Snack"/>
            Meal Date:
            <input value={date} onChange={handleChange} type="date" name="date" />
        <button type="submit">Add this meal to your profile</button>
        </form>
    </div>
  )
}

export default CreateAMealForm