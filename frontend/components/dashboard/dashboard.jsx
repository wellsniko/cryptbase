
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
import TopNavContainer from '../top_nav/top_nav_container'

const Dashboard = ({ currentUser, logout }) => (
    <div className="user-whole-page">
        <TopNavContainer/>
        <div className="main-dashboard">
          <h1>Dashboard and Other Tabs Go Here</h1><br/>
        
            
          
        </div>
    </div>
  );



export default Dashboard;
