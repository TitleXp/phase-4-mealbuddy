import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'


import Login from './Login'
import Signup from './Signup'
import MealLog from './MealLog'
import AddToMeal from './AddToMeal'
import CreateAFoodForm from './CreateAFoodForm'
import Profile from './Profile'
import Community from './Community'
import NavBar from './NavBar'



function App() {

    const history = useHistory()

    const [currentUser, setCurrentUser] = useState(null);
    const [showLogin, setShowLogin] = useState(true)
    const [foods, setFoods] = useState([]) // foods array
    const [meals, setMeals] = useState([]) // meals array for the form


    const handleLoginSignup = () => {
        setShowLogin(currentVal => !currentVal)
      }

    useEffect(() => { // fetch /authorized to see if user is logged in when page refresh/navigate away
        const fetchAuthorizedUser = async () => {
            try {
              const resp = await fetch("/authorized")
              const data = await resp.json()
              if(resp.ok){
              setCurrentUser(data)
              history.push('/meals')
                }else {
                  // setMessage something
              }
            } catch (error) {
              alert(error)
            }
          }
          fetchAuthorizedUser()
        }, [])
      

    // console.log(currentUser)

    useEffect(() => { // GET foods
        fetch('/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
      }, [])

    useEffect(() => { // GET meals for the form
        fetch('/meals')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, [] )


if(!currentUser) { // IF no user logged in, what can they see?
    return(
        <div>
            <NavBar />
            <Switch>

            {/* <Route exact path= "/">
                <Login />
            </Route>

            <Route exact path= "/meals">
                <MealLog />
            </Route>

            <Route path= "/meals/food_item/new">
                <AddToMeal />
            </Route>

            <Route exact path="/foods/new" >
                <CreateAFoodForm />
            </Route>

            <Route exact path="/profile" >
                <Profile />
            </Route> */}

            <Route exact path="/community" >
                <Community />
            </Route>

            <Route exact path="/login" >
                <>
                    {showLogin?
                        <Login setCurrentUser={setCurrentUser} handleLoginSignup={handleLoginSignup}/> : 
                        <Signup setCurrentUser={setCurrentUser} handleLoginSignup={handleLoginSignup}/>
                    }
                </>
            </Route>


            </Switch>
        </div>
        )}

  return (
    <div>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        <Switch>

          <Route exact path= "/">
              <Login />
          </Route>

          <Route exact path= "/meals">
              <MealLog user={currentUser} setFoods={setFoods}/>
          </Route>

          <Route path= "/meals/food_item/new">
              <AddToMeal foods={foods} meals={meals} setMeals={setMeals}/>
          </Route>

          <Route exact path="/foods/new" >
              <CreateAFoodForm />
          </Route>

          <Route exact path="/profile" >
              <Profile user={currentUser}/>
          </Route>

          <Route exact path="/community" >
              <Community />
          </Route>

          {/* <Route exact path="/login" >
            <>
                {showLogin?
                    <Login setCurrentUser={setCurrentUser} handleLoginSignup={handleLoginSignup}/> : 
                    <Signup setCurrentUser={setCurrentUser} handleLoginSignup={handleLoginSignup}/>
                }
            </>
          </Route> */}


        </Switch>
    </div>
  );
}

export default App;
