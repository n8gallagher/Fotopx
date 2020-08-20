import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => (
    <div className="nav-box">
        <div className="left-nav">
        <Link to="/" className="header-link" style={{textDecoration: 'none'}}>
            <h3>foto<sup>px</sup></h3>
        </Link>
        </div>
        <div className="right-nav">
            <button className="nav-login-button">Login</button>
            <button className="nav-signup-button">Sign Up</button>
        </div>
    </div>
)

export default Nav;