import React from 'react';


const UserShow = (props) => (
    <div className="user-show-box">
        <img className="profile-header-image" 
            src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg" 
            alt="blank-background"
        />
        <img className="profile-picture-round-thumb" 
            src="https://pacdn.500px.org/userpic.png" 
            alt="blank-profile-picture"
        />
        <div className="profile-info-box">
            <div className="profile-info-content">
                <h4>{props.currentUser.username}</h4>
            </div>

            <button class="pencil-edit-button"><img src="https://image.flaticon.com/icons/svg/158/158727.svg" alt="pencil-edit"/></button>
        </div>

    </div>
);

export default UserShow;