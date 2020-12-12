
import React from "react";
import HeaderContainer from "../header/header_container";

// import SignUpFormContainer from '../session_form/signup_form_container';
// import LogInFormContainer from '../session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
// import HomepageContainer from '../homepage/homepage_container'
// import NavContainer from '../nav/nav_container';
// import Nav2Container from '../nav2/nav2_container';
import {Link, Redirect, Switch, HashRouter, Route} from 'react-router-dom'
import TopNavContainer from '../top_nav/top_nav_container'
import PriceIndexContainer from '../prices/price_index_container'
import SideNavContainer from '../side_nav/side_nav_container'
import DashboardContainer from '../dashboard/dashboard_container'

const UserHome = ({ currentUser, logout }) => (
    
      <div className="signed-in-body" style={{backgroundColor: 'rgb(250, 251, 252)'}}>
        <div className="side-nav-holder">
            <SideNavContainer/>
        </div>
            <div className='dashboard-holder'>
              <div className="user-whole-page">
                <TopNavContainer/>
                <div className="main-dashboard">
                 
                   
                      <Switch>
                        <AuthRoute exact path="/dashboard" component={DashboardContainer}/>
                        <AuthRoute exact path="/price" component={PriceIndexContainer}/>
                      </Switch>
                    
                </div>
            </div>
          </div>
      </div>
  
  );



export default UserHome;


                    // <div className="coin-index-dashboard">
                    //   <CoinIndexContainer/>
                    // </div>