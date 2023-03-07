import React from 'react';
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

            <div>
                <Link to="/meals">
                    Meal Log    
                </Link>

                <Link to="/meals/food_item/new" >
                    Add To Meal
                </Link>        

                <Link to="/community">
                    Community
                </Link> 

                <Link to="/profile">
                    Profile
                </Link>

                <Link to="/login">
                    Login
                </Link>

            </div>
        )
    }


    return (
        <div>
            {/* Welcome, {currentUser.username} */}
            <Link to="/meals">
                Meal Log    
            </Link>

            <Link to="/meals/food_item/new" >
                Add To Meal
            </Link>        

            <Link to="/community">
                Community
            </Link> 

            <Link to="/profile">
                Profile
            </Link>

            <Link to="/login">
                Login
            </Link>

            <button onClick={handleLogOut}>Log Out</button>

        </div>
    );
}

export default NavBar;
