import React, {useEffect} from "react";
import TradeModal from './modal/trade_modal'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomepageContainer from './homepage/homepage_container'
import {Switch} from 'react-router-dom'
import DashboardContainer from './dashboard/dashboard_container'
import PriceIndexContainer from './prices/price_index_container'
import SideNavContainer from './side_nav/side_nav_container'
import TopNavContainer from './top_nav/top_nav_container'
import PriceDetailContainer from './prices/price_detail_container'
import {createBrowserHistory} from 'history'
import ReactGA from 'react-ga';


const App = () => {

    useEffect(()=>{
      const history = createBrowserHistory()
      ReactGA.initialize('UA-189972380-1');
      history.listen((location, action) => {
          ReactGA.pageview(location.pathname + location.hash);
          // console.log(location)
      });
    },[])

    return (
      <>
        <TradeModal/>
        <SideNavContainer/>
        <TopNavContainer/>

        <Switch>
          <AuthRoute exact path="/" component={HomepageContainer}/>
          <AuthRoute exact path="/login" component={LogInFormContainer}/>
          <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
          <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
          <ProtectedRoute exact path="/prices" component={PriceIndexContainer}/>
          <ProtectedRoute exact path="/prices/:coinId" component={PriceDetailContainer}/>
        </Switch>
      </>
    )
}

export default App;   
