import React from 'react';
import { Link } from 'react-router-dom';



const Homepage = ({ currentUser, logout }) => {
  const noCurrentUser = () => (
    <div className="main-body-home">
        <div className="home-get-started">
            <span className="buy-and-sell">Buy and sell cryptocurrency</span>
                <br/>
                <h3 className="five-free"> <div id="bitcoin-html">&#x0e3f; </div>   &nbsp; &nbsp; Get $5 in free Bitcoin</h3>
                <br/>
                <p className="intro">
                Cryptbase is the easiest place to buy, sell, and manage your cryptocurrency 
                portfolio. <br/>Jump start your crypto portfolio with $5 in free Bitcoin after you sign up. 
                Terms apply.
            </p>
        <Link className="home-link-get-started" to="/signup">Get started</Link>
        </div> 
    </div>
  )
  const userPresent = () => (
    <hgroup className="welcome-homepage">
      <h2 className="welcome-name">Welcome to Cryptbase, {currentUser.email}!</h2>
      <button className="welcome-button" onClick={logout}>Sign Out</button>
    </hgroup>
  );

  return currentUser ? userPresent() : noCurrentUser();
};


export default Homepage;
