import React from 'react';

const Splash = (props) => {
    return (
        <div>
            <h1>This is the fotopx splash page </h1>
            <h3>Hi {props.currentUser.username}</h3>
        </div>
    );
};
    

export default Splash;