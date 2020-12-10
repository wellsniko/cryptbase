
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
                <li>Home</li>
                <li>Portfolio</li>
                <li>Prices</li>
                <li>Earn Rewards</li>
                <li>Notification</li>
            </ul>
        </nav>
    </div>
  );




export default SideNav;
