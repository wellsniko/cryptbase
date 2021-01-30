import React from 'react';

const Nav2 = ({ currentUser }) => {

  if (currentUser) {
    return null
  } else {
    return (
      <nav className="nav-bar">
        <div>
            <a>Products</a>
        </div>
        <div>
            <a>Help</a>
        </div>
        <div>
            <a>Prices</a>
        </div>
      </nav>
    )
  }
};


export default Nav2;
