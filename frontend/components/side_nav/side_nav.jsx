
import React from "react";
import HeaderContainer from "../header/header_container";
// import {Route} from 'react-router-dom'
import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
// import HomepageContainer from '../homepage/homepage_container'
// import NavContainer from '../nav/nav_container';
// import Nav2Container from '../nav2/nav2_container';
import {Link, Redirect, Switch, HashRouter, Route} from 'react-router-dom'


const SideNav = ({ currentUser, logout }) => (
    <div>
        <nav className="side-nav">
            <h3 id="logo-logged-in">Cryptbase</h3>
            <ul className="nav-logged-in">
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/accounts">Portfolio</Link></li>
                <li><Link to="/price">Prices</Link></li>
                <li><Link to="/rewards">Earn Rewards</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
            </ul>
        </nav>
        
    </div>
  );




export default SideNav;
