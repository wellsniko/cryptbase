
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
import UserHomeContainer from '../user_home/user_home_container'

const Direction = ({ currentUser, logout }) => {
  const noUserDirect = () => (
  
     <div className="home-body">
      <header>
          <Link to="/" className="cryptbase-logo">Cryptbase</Link>
          
          <Switch>
            
            <Route exact path="/" component={NavContainer}/>
            <AuthRoute exact path="/login" component={Nav2Container}/>
            <AuthRoute exact path="/signup" component={Nav2Container}/>
            <ProtectedRoute exact path="/dashboard" component={UserHomeContainer}/>
           
          </Switch>

          <HeaderContainer/>
            
      </header>
      
        <Switch> 
          
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
         
          <ProtectedRoute exact path="/dashboard" component={UserHomeContainer}/>
          <Route path="/" component={HomepageContainer}/>
        </Switch>
    </div>
    
  );

  // const userDirect = () => (
  //   <HashRouter>
  //     <ProtectedRoute exact path="/dashboard" component={UserHomeContainer}/>
      
  //   </HashRouter>
  // );

  const user2Direct = () => (
  
   <div className="home-whatever">
         
          
          <Switch>
            
            <Route exact path="/" component={NavContainer}/>
            <AuthRoute exact path="/login" component={Nav2Container}/>
            <AuthRoute exact path="/signup" component={Nav2Container}/>
            <ProtectedRoute exact path="/dashboard" component={UserHomeContainer}/>
           
          </Switch>
    
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <Route path="/" component={HomepageContainer}/>
          <ProtectedRoute exact path="/dashboard" component={UserHomeContainer}/>
        </Switch>
    </div>
 
  );

  return currentUser ?  user2Direct() : noUserDirect();
};


export default Direction;

	{/* <Switch>
            
            <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
            {/* <Route exact path="/coins" component={PricesPage}/> */}
            
            {/* <Route exact path="/" component={DirectionContainer} />
		</Switch> */} 