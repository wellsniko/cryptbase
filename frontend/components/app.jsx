import React from "react";
import HeaderContainer from "./header/header_container";
// import {Route} from 'react-router-dom'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomepageContainer from './homepage/homepage_container'
import NavContainer from './nav/nav_container';
import Nav2Container from './nav2/nav2_container';
import {Link, Redirect, Switch, HashRouter, Route} from 'react-router-dom'
import DirectionContainer from './direction/direction_container'
import UserHomeContainer from './user_home/user_home_container'
import PriceIndexContainer from './prices/price_index_container'
import SideNavContainer from './side_nav/side_nav_container'
import TopNavContainer from './top_nav/top_nav_container'

const App = () => (


  <>
          <SideNavContainer/>
            <TopNavContainer/>
          <Switch>
            
            <Route exact path="/" component={HomepageContainer}/>
            <AuthRoute exact path="/login" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
            <ProtectedRoute exact path="/dashboard" component={UserHomeContainer}/>
            <ProtectedRoute exact path="/prices" component={PriceIndexContainer}/>
           
          </Switch>

         
            
      
      
    

    </>
    
);

export default App;   

{/* <Switch>
      <AuthRoute path="/" component={DirectionContainer}/>
      <ProtectedRoute exact path="/dashboard" component={UserHomeContainer}/>
    </Switch> */}