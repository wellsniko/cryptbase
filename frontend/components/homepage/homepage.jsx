import React from 'react';
import { Link, Redirect, withRouter  } from 'react-router-dom';
import CoinIndexContainer from '../prices/nu_price_index_container'
import NavContainer from '../nav/nav_container'
import HeaderContainer from '../header/header_container'

class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',

    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
   update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  render(){
    console.log(this.state)
    

    // console.log(this.props)
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
                <input id="home-email-address" type="text" onChange={this.update('email')} placeholder="email"/>  
                <Link className="home-link-get-started" email={this.state.email}  to={{pathname:`/signup`, state: {email: this.state.email}}}>Get started</Link>
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

  return (this.props.currentUser? null : noCurrentUser())

  }
};


export default withRouter(Homepage);
