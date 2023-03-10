import React from 'react';
import mealbuddylogo from '../mealbuddylogo.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const NavBar = ( { setCurrentUser, currentUser } ) => {

    const history = useHistory()

    const handleLogOut = (e) => { // delete session/logout
        fetch("/logout", {
           method: "DELETE", }
           ).then((r) => {
          if (r.ok) {
            setCurrentUser(null)
            history.push('/');
          } else {
            r.json()
            .then(err => alert(err))
          }
        });
      }

    if(!currentUser) {
        return(
            <div style={{textAlign: "center"}}>
                <img src={mealbuddylogo} alt="mealbuddylogo" ></img>
                    <div style={{textAlign: "center"}}>    

                        <Link to="/login">
                            <h1>Login</h1> 
                        </Link>

                    </div>
            </div>
        )
    }


    return (
        <div style={{backgroundColor: "#3a6ef0"}} class="ui menu">
            {/* Welcome, {currentUser.username} */}
            <Link to="/meals">
                <button style={{color: "white"}} class="item">Meal Log</button> 
            </Link>

            <Link to="/meals/food_item/new" >
                <button style={{color: "white"}} class="item">Add To Meal</button> 
            </Link>        

            <Link to="/community">
                <button style={{color: "white"}} class="item">Community</button> 
            </Link> 

            <Link to="/profile">
                <button style={{color: "white"}} class="item">Profile</button> 
            </Link>

            <button style={{color: "white"}} class="item" onClick={handleLogOut}>Log Out</button>

        </div>
    );
}

export default NavBar;
