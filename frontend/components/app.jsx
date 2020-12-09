import React from "react";
import HeaderContainer from "./header/header_container";
// import {Route} from 'react-router-dom'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomepageContainer from './homepage/homepage_container'

const App = () => (
  <div>
    <header>
        <h1>Cryptbase</h1>
        <HeaderContainer/>
    </header>

      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <div>
        <HomepageContainer/>
      </div>
  </div>
);

export default App;