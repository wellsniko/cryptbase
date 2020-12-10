import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link className="sign-in" to="/login">Sign in</Link>
      <Link className="get-started" to="/signup">Get started</Link>
    </nav>
  );
  const headerTop = () => (
    <hgroup className="header-group">
      <h2 className="header-name">{currentUser.email}is signed in</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? headerTop() : sessionLinks();
};


export default Header;
