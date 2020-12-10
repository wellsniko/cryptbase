
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


const Dashboard = ({ currentUser, logout }) => (
    <div className="main-dashboard">
        <h1>Dashboard and Other Tabs Go Here</h1><br/>
        <button className="temp-button" onClick={logout}>Log Out</button>
    </div>
  );



export default Dashboard;
