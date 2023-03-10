import React from 'react';


const Profile = ({user}) => {
    return (
        <div class="ui card" style={{textAlign: 'center'}} >
            <div class="content" >
                <div class="header" >
                    Name: {user.name}
                </div>
                <div class="ui feed" >
                    <div class="summary">
                        Username: {user.username}
                    </div>
                    <div class="summary">
                        Date of Birth: {user.dob}
                    </div>
                    <div class="summary">
                        Weight: {user.weight}
                    </div>
                    <div class="summary">
                        Calorie Goal:{user.calorie_goal}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
