import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import MealLog from './MealLog'
import AddToMeal from './AddToMeal'
import CreateAFoodForm from './CreateAFoodForm'
import Profile from './Profile'
import Community from './Community'
import NavBar from './NavBar'

function App() {
  return (
    <div>
        <NavBar />
        <Switch>

          <Route exact path= "/">
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
          </Route>

          <Route exact path="/community" >
              <Community />
          </Route>

        </Switch>
    </div>
  );
}

export default App;
