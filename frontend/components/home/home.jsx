import React from 'react';
import { Link } from 'react-router-dom';



const Home = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up</Link>
    </nav>
  );
  const homePage = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome to Cryptbase, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? homePage() : sessionLinks();
};


export default Home;
