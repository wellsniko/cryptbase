import React from 'react';

const Nav = ({ currentUser, logout }) => {

    if (currentUser) {
        return null
    } else {
        return (
            <nav className="nav-bar">
                <div>
                    <a href="https://github.com/wellsniko" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div>
                   <a href="https://github.com/wellsniko/cryptbase" target="_blank" rel="noreferrer">Git Repo</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/niko-wells-16134aa0/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div>
                    <a href="http://findyoursquad.herokuapp.com/#/" target="_blank" rel="noreferrer">Earn Crypto</a>
                </div>
                <div>
                    <a href="https://wellsniko.github.io/fleet_space/" id="promotion" target="_blank" rel="noreferrer">Get 158+</a>
                </div>
            </nav>
        )
    } 
};

export default Nav;
