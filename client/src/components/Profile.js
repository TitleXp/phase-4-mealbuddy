import React from 'react';

const Profile = ({user}) => {
    return (
        <div>
            Username: {user.username}
            Name: {user.name}
            Date of Birth: {user.dob}
            Weight: {user.weight}
            Calorie Goal:{user.calorie_goal}
        </div>
    );
}

export default Profile;
