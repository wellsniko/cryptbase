
import React from "react";
import HeaderContainer from "../header/header_container";
// import {Route} from 'react-router-dom'
import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import HomepageContainer from '../homepage/homepage_container'
import NavContainer from '../nav/nav_container';
import Nav2Container from '../nav2/nav2_container';
import {Link, Redirect, Switch, HashRouter, Route} from 'react-router-dom'
import DirectionContainer from './direction_container'
import SideNavContainer from '../side_nav/side_nav_container'
import DashboardContainer from '../dashboard/dashboard_container'

const Direction = ({ currentUser, logout }) => {
  const noUserDirect = () => (
   <div>
      <header>
          <Link to="/" className="cryptbase-logo">Cryptbase</Link>
          
          <Switch>
            <Route exact path="/" component={NavContainer}/>
            <AuthRoute exact path="/login" component={Nav2Container}/>
            <AuthRoute exact path="/signup" component={Nav2Container}/>
          </Switch>
          <HeaderContainer/>
      </header>
      

        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <Route exact pat="/" component={HomepageContainer}/>
        </Switch>
    </div>
  );
  const userDirect = () => (
      <div className="signed-in-body" style={{backgroundColor: 'rgb(250, 251, 252)'}}>
        <div>
            <div className="side-nav-holder">
                <SideNavContainer/>
            </div>
            <div className='dashboard-holder'>
                <DashboardContainer/>
            </div>
        </div>
      </div>
  );

  return currentUser ? userDirect() : noUserDirect();
};


export default Direction;

	{/* <Switch>
            
            <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
            {/* <Route exact path="/coins" component={PricesPage}/> */}
            
            {/* <Route exact path="/" component={DirectionContainer} />
		</Switch> */} 