import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) =>  {
    const sessionLinks = () => (
        <div className="nav-box">
            <div className="left-nav">
            <Link to="/" className="header-link" style={{textDecoration: 'none'}}>
                <h3>foto<sup>px</sup></h3>
            </Link>
            </div>

            <div className="right-nav">
                <Link to="/login">
                    <button className="nav-login-button">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="nav-signup-button">Sign Up</button>
                </Link>
            </div>
        </div>
    )

    const logoutLinks = () => (
        <div className="nav-box">
            <div className="left-nav">
            <Link to="/" className="header-link" style={{textDecoration: 'none'}}>
                <h3>foto<sup>px</sup></h3>
            </Link>
            </div>

            <div className="right-nav">
                <button className="nav-logout-button" onClick={logout}>Logout</button>
            </div>
        </div>
    )

    
        return currentUser? logoutLinks() : sessionLinks();
};

export default Nav;