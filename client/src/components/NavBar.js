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

                <Link to="/community">
                    Community
                </Link> 

                <Link to="/login">
                    Login
                </Link>

            </div>
        )
    }


    return (
        <div style={{backgroundColor: "blue"}} class="ui menu">
            {/* Welcome, {currentUser.username} */}
            <Link to="/meals">
                <a class="item">Meal Log</a> 
            </Link>

            <Link to="/meals/food_item/new" >
                <a class="item">Add To Meal</a> 
            </Link>        

            <Link to="/community">
                <a class="item">Community</a> 
            </Link> 

            <Link to="/profile">
                <a class="item">Profile</a> 
            </Link>

            {/* <Link to="/login">
                Login
            </Link> */}

            <a class="item" onClick={handleLogOut}>Log Out</a>

        </div>
    );
}

export default NavBar;
