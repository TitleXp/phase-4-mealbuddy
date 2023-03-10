import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = ({ handleLoginSignup, setCurrentUser, formErrors, setFormErrors }) => {

    const [newUser, setNewUser] = useState({
        username: "",
        name: "",
        dob: "",
        email: "",
        password: "",
        calorie_goal: "",
        weight: ""
    })
    
    // const [ formErrors, setFormErrors ] = useState([])

    const history = useHistory()
    
    const handleChange = (e) => {
      setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => {
            if (response.status === 201) {
                response.json().then(userObj => {
                setCurrentUser(userObj)
                history.push('/meals')
            })      
            } else {
                // response.json().then((error) => {
                // alert(error)
                // })
                response.json().then((err) => setFormErrors(err.errors))
                console.log(formErrors)
                console.log("inside else statement")
            }
            })
            .catch((error) => alert(error));
        };

  return (

    <div>
        Login
        <button onClick={handleLoginSignup}>Log In</button>
        <form onSubmit={handleSubmit}>

            <div>
            <input type="text" name="username" placeholder='UserName' onChange={handleChange} value={newUser.username} required />
            </div>

            <div>
            <input type="text" name="name" placeholder='Name' onChange={handleChange} value={newUser.Name} required />
            </div>
            
            <div>
            <input type="date" name="dob" placeholder='Date of Birth' onChange={handleChange} value={newUser.dob} required />
            </div>

            <div>
            <input type="number" name="calorie_goal" placeholder='Calorie Goal' onChange={handleChange} value={newUser.calorie_goal} required />
            </div>

            <div>
            <input type="number" name="weight" placeholder='Weight' onChange={handleChange} value={newUser.weight} required />
            </div>

            <div>
            <input type="text" name="email" placeholder='Email' onChange={handleChange} value={newUser.email} required />
            </div>

            <div>
            <input type="password" name="password" placeholder='Password' onChange={handleChange} value={newUser.password} required />
            </div>

          <input type="submit" value="Create New User" />
          {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}

        </form>

    </div>
  )
}

export default Signup