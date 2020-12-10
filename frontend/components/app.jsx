import React from "react";
import HeaderContainer from "./header/header_container";
// import {Route} from 'react-router-dom'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomepageContainer from './homepage/homepage_container'
import NavContainer from './nav/nav_container';
import {Link, Redirect, Switch} from 'react-router-dom'


const App = () => (
  <div>
    <div>
    <header>
        <Link to="/" className="cryptbase-logo">Cryptbase</Link>
        <NavContainer/>
        <HeaderContainer/>
    </header>
    </div>

      <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      
        <HomepageContainer/>
      </Switch>
    
  </div>
);

export default App;