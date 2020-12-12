
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

const TopNav = ({ currentUser, logout }) => {

  const userHere = () => (
    <nav className="main-top-nav">
     
        <h1>Home</h1><br/>
        <button className="temp-button" onClick={logout}>Log Out</button>
    </nav>
  )

   return currentUser ?  userHere() : <> </>
};



export default TopNav;
