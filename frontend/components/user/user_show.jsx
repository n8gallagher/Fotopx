import React from 'react';


const UserShow = (props) => (
    <div className="user-show-box">
        <img className="profile-header-image" 
            src="https://images.unsplash.com/photo-1525351159099-81893194469e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80" 
            alt="blank-background"
        />
        <img className="profile-picture-round-thumb" 
            src={window.jerryProfileURL} 
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