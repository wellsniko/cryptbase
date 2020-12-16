import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import CoinIndexContainer from '../prices/nu_price_index_container'
import NavContainer from '../nav/nav_container'
import HeaderContainer from '../header/header_container'

const Homepage = ({ currentUser, logout }) => {
  const noCurrentUser = () => (
    <div className="home-body">
      <header>
          <Link to="/" className="cryptbase-logo">Cryptbase</Link>
          <NavContainer/>
          <HeaderContainer/>
    </header>
      <section>
        <div className="main-body-home">
            <div className="home-get-started">
                <span className="buy-and-sell">Buy and sell cryptocurrency</span>
                    <div className="homepage-spacer"></div>
                    <h1 className="five-free"> <div id="bitcoin-html">&#x0e3f; </div>    &nbsp; Get $5 in free Bitcoin</h1>
                    <p className="intro">
                    Cryptbase is the easiest place to buy, sell, and manage your cryptocurrency 
                    portfolio. Jump <br/>start your crypto portfolio with $5 in free Bitcoin after you sign up. 
                    Terms apply.
                </p>
            <div className="home-email-address-div">
              <form className="home-email-address"> 
                <input id="home-email-address" type="text" placeholder="email"/>  
                <Link className="home-link-get-started" to="/signup">Get started</Link>
              </form> 
            </div>
            </div> 
            
        </div>
        <div className="home-coins">
              <CoinIndexContainer/>
        </div>
        
      </section>
    </div>
  )
  const userPresent = () => (
    <hgroup className="welcome-homepage">
      <h2 className="welcome-name">Welcome to Cryptbase, {currentUser.email}!</h2>
      <button className="welcome-button" onClick={logout}>Sign Out</button>
    </hgroup>
  );

  return currentUser ? <Redirect to="/dashboard"/> : noCurrentUser();
};


export default Homepage;