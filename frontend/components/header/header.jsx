import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link className="sign-in" to="/login">Sign in</Link>
      &nbsp;&nbsp;
      <Link className="get-started" to="/signup">Get started</Link>
    </nav>
  );
  const header = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome to Cryptbase, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? header() : sessionLinks();
};


export default Header;
