
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
                <li className="side-nav-li"><Link to="/dashboard" className="side-nav-links">
                    <div className="side-div-1">
                        <div className="side-div-2">
                            <img src={window.homeImage} className="side-image-new"/>
                        </div>

                    </div>
                    
                    
                    
                    <span className="side-span">Home</span>
                    </Link>
                </li>

                <li className="side-nav-li"><Link to="/portfolio" className="side-nav-links">
                    <div className="side-div-1">
                        <div className="side-div-2">
                            <img src={window.portfolioImage} className="side-image-new"/>
                        </div>

                    </div>
                    
                    
                    
                    <span className="side-span">Portfolio</span>
                    </Link>
                </li>

                <li className="side-nav-li"><Link to="/prices" className="side-nav-links">
                    <div className="side-div-1">
                        <div className="side-div-2">
                            <img src={window.pricesImage} className="side-image-new"/>
                        </div>

                    </div>
                    
                    
                    
                    <span className="side-span">Prices</span>
                    </Link>
                </li>

                <li className="side-nav-li"><Link to="/prices" className="side-nav-links">
                    <div className="side-div-1">
                        <div className="side-div-2">
                            <img src={window.giftImage} className="side-image-new"/>
                        </div>

                    </div>
                    
                    
                    
                    <span className="side-span">Earn Reward</span>
                    </Link>
                </li>

                <li className="side-nav-li"><Link to="/prices" className="side-nav-links">
                    <div className="side-div-1">
                        <div className="side-div-2">
                            <img src={window.bellImage} className="side-image-new"/>
                        </div>

                    </div>
                    
                    
                    
                    <span className="side-span">Notifications</span>
                    </Link>
                </li>
               
            </ul>
        </nav> 
    </>
    )

     return currentUser ?  userHere() : <> </>
}




export default SideNav;
