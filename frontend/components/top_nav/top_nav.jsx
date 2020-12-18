
import React from "react";
import HeaderContainer from "../header/header_container";
// import {Route} from 'react-router-dom'
// import SignUpFormContainer from '../session_form/signup_form_container';
// import LogInFormContainer from '../session_form/login_form_container';
// import { AuthRoute, ProtectedRoute } from '../../util/route_util';
// import HomepageContainer from '../homepage/homepage_container'
// import NavContainer from '../nav/nav_container';
// import Nav2Container from '../nav2/nav2_container';
// import {Link, Redirect, Switch, HashRouter, Route} from 'react-router-dom'
import {withRouter} from 'react-router'

const TopNav = (props) => {
      console.log(props)
  // const titleHelper = ()=> {
  //       if 
  //   }
  const getTitle = () => {
    switch (props.location.pathname){
      case "/dashboard": 
          return "Home"
      case "/porfolio":
        return "Portfolio"
      default:
        return "Prices"
      
  }
  }


  const userHere = () => (
    <nav className="main-top-nav">
     
        <div className="top-nav-div-1">{getTitle()}</div>
        <div className="top-nav-div-2"></div>
        <div className="top-nav-div-3">
          <div className="top-nav-div-3-3">
            <div className="top-nav-div-1-1">
              <button className="top-nav-buy-sell">
                <span className="span-top-buy-sell">Buy / Sell</span>
              </button>
            
            </div>
            <div className="top-nav-div-1-2">
              <button className="logout-top-nav" onClick={props.logout}>
                <span className="logout-span-top">Log Out</span>
                
                </button>
            
            </div>
          </div>
          
        </div>
        
    </nav>
  )


   return props.currentUser ? userHere() : <> </>
};



export default withRouter(TopNav);
