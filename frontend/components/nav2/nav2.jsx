import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Nav2 = ({ currentUser, logout }) => {
  const noUserNavBar = () => (
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
  );


  return currentUser ? <Redirect to="/dashboard"/> : noUserNavBar();
};


export default Nav2;
