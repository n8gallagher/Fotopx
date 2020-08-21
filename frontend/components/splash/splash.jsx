import React from 'react';

const Splash = (currentUser, logout) => (
        <div>
            <h1>This is the fotopx splash page </h1>
            <h3>Hi {currentUser.username}</h3>
        </div>
    );
    

export default Splash;