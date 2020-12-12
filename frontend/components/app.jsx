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

const App = () => (
  
  <HashRouter>
    <DirectionContainer/>
 
  </HashRouter>
);

export default App;   

{/* <Switch>
      <AuthRoute path="/" component={DirectionContainer}/>
      <ProtectedRoute exact path="/dashboard" component={UserHomeContainer}/>
    </Switch> */}