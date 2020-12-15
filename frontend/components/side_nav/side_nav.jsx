
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


const SideNav = ({ currentUser, logout }) => {
    const userHere = () => (
    <>
        <nav className="side-nav">
            <h3 id="logo-logged-in">Cryptbase</h3>
            <ul className="side-nav-logged-in">
                <li><Link to="/dashboard" className="side-nav-links">Home</Link></li>
                <li><Link to="/accounts" className="side-nav-links">Portfolio</Link></li>
                <li><Link to="/prices" className="side-nav-links">Prices</Link></li>
                <li><Link to="/rewards" className="side-nav-links">Earn Rewards</Link></li>
                <li><Link to="/notifications" className="side-nav-links">Notifications</Link></li>
            </ul>
        </nav> 
    </>
    )

     return currentUser ?  userHere() : <> </>
}




export default SideNav;
