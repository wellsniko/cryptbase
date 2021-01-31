import React from 'react';

const Nav2 = ({ currentUser }) => {

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
      </nav>
    )
  }
};


export default Nav2;
