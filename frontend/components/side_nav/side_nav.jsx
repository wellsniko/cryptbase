import React from "react";
import { NavLink} from 'react-router-dom'

const SideNav = ({ currentUser}) => {

    const userHere = () => (
        <>
            <nav className="side-nav">
                <h3 id="logo-logged-in">Cryptbase</h3>
                <ul className="side-nav-logged-in">
                    <li className="side-nav-li"><NavLink to="/dashboard" activeClassName="selected-side-nav-links" className="side-nav-links">
                        <div className="side-div-1">
                            <div className="side-div-2">
                                <img src={window.homeImage} className="side-image-new"/>
                            </div>
                        </div>
                        <span className="side-span">Home</span>
                        </NavLink>
                    </li>

                    <li className="side-nav-li"><NavLink activeClassName="selected-side-nav-links" to="/portfolio" className="side-nav-links">
                        <div className="side-div-1">
                            <div className="side-div-2">
                                <img src={window.portfolioImage} className="side-image-new"/>
                            </div>
                        </div>
                        <span className="side-span">Portfolio</span>
                        </NavLink>
                    </li>

                    <li className="side-nav-li"><NavLink activeClassName="selected-side-nav-links" to="/prices" className="side-nav-links">
                        <div className="side-div-1">
                            <div className="side-div-2">
                                <img src={window.pricesImage} className="side-image-new"/>
                            </div>
                        </div>
                        <span className="side-span">Prices</span>
                        </NavLink>
                    </li>

                    <li className="side-nav-li"><NavLink activeClassName="selected-side-nav-links" to="/rewards" className="side-nav-links">
                        <div className="side-div-1">
                            <div className="side-div-2">
                                <img src={window.giftImage} className="side-image-new"/>
                            </div>
                        </div>
                        <span className="side-span">Earn Reward</span>
                        </NavLink>
                    </li>

                    <li className="side-nav-li"><NavLink activeClassName="selected-side-nav-links" to="/notifications" className="side-nav-links">
                        <div className="side-div-1">
                            <div className="side-div-2">
                                <img src={window.bellImage} className="side-image-new"/>
                            </div>
                        </div>
                        <span className="side-span">Notifications</span>
                        </NavLink>
                    </li>
                
                </ul>
            </nav> 
        </>
    )

     return currentUser ?  userHere() : null
}




export default SideNav;