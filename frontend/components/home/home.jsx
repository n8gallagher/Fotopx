import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-box">
        
        <img src={window.homePhotoURL} alt="cow" className="home-photo"/>
        <div className="home-left-copy">
            <h1>Find and share great stunning photos</h1>
            <p>find inspiration from all kinds of photos from around the planet. We don't follow trends, we just have great photos</p>
            <button className="home-signup-button"> <Link to="/signup" className="home-signup-link">Sign Up</Link></button>
        </div>
        <div>
            <svg className="svg-wave"id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 727.58"><title>Untitled-1</title><path class="cls-1" d="M1440,161S1144,7,902,99.87C629.11,204.59,494,237,360.5,177.27,258.13,131.47,84.5,57.5,1,61.58V789H1440Z" transform="translate(-1 -61.42)"/></svg>
            <h4 className="home-photographer">photo by Nate Gallagher</h4>
        </div>
    </div>
)

export default Home;