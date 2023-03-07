import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
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
        </div>
    );
}

export default NavBar;
