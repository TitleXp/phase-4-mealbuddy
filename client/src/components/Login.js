import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ( { setCurrentUser, handleLoginSignup, formErrors, setFormErrors }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    

    // const handleChange = ({target: {name, value}}) => {
    //     setUser(current => ({
    //         ...current,
    //         [name]: value
    //     }))   
    // }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.status === 200){
                res.json().then(userObj => {
                    setCurrentUser(userObj)
                    history.push('/meals')
                })
            } else {
                // res.json().then(errorObj => alert(errorObj.error))
                res.json().then((err) => setFormErrors(err.errors))
                console.log(formErrors)
                console.log("inside else statement")

            }
        })
        .catch(error => alert(error))
        setUser({
            username: "",
            password: ""
        })
    }

    return (
        <div>
        Sign up
        <button onClick={handleLoginSignup}>Join Meal Buddy Here!</button>
        <form onSubmit={handleSubmit}>

            <div>
                <input type="text" onChange={handleChange} value={user.username} name="username" placeholder='Username' required />
            </div>

            <div>
                <input type="password" onChange={handleChange} value={user.password} name="password" placeholder='Password' required />
            </div>

            <input type="submit" value="Login" />

            {formErrors.length > 0
             ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
             ))
             : null}

        </form>
    </div>
    );
}

export default Login;
