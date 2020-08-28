import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) =>  {
    const sessionLinks = () => (
        <div className="nav-box">
            <div className="left-nav">
            <Link to="/" className="header-link" style={{textDecoration: 'none'}}>
                <h3>foto<sup>px</sup></h3>
            </Link>
            </div>

            <div className="right-nav">
                <Link to="/login">
                    <button className="nav-login-button">Log in</button>
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
                <h4>Logged in as <Link to="/p" className="nav-profile-link">{props.currentUser.username}</Link></h4>
                <button className="nav-logout-button" onClick={props.logout}>Logout</button>
            </div>
        </div>
    )

    return props.currentUser ? logoutLinks() : sessionLinks();
};

export default Nav;