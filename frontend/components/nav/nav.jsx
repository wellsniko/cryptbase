import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
  const currentUserNavBar = () => (
    <nav className="nav-bar">
        <div>
            <a>Prices</a>
        </div>
        <div>
            <a>Products</a>
        </div>
        <div>
            <a>Company</a>
        </div>
        <div>
            <a>Earn Crypto</a>
        </div>
        <div>
            <a id="promotion">Get $158+</a>
        </div>
    </nav>
  );
  const noUserNavBar = () => (
    <nav className="nav-bar">
        <div>
            <a>Prices</a>
        </div>
        <div>
            <a>Products</a>
        </div>
        <div>
            <a>Company</a>
        </div>
        <div>
            <a>Earn Crypto</a>
        </div>
        <div>
            <a id="promotion">Get $158+</a>
        </div>
    </nav>
  );

  return currentUser ? currentUserNavBar() : noUserNavBar();
};


export default Nav;
