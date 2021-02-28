import React from "react";
import { NavLink} from 'react-router-dom'
import ReactGA from 'react-ga'

const SideNav = ({ currentUser}) => {

    const recordReactGA = (button) => {
        ReactGA.event({
            category:"SideNav",
            action: button
        })
    }

    const userHere = () => (
        <>
            <nav className="side-nav">
                <h2 id="logo-logged-in"><NavLink onClick={() => recordReactGA("'Cryptbase' logo link(dashboard)")} style={{textDecoration: "none", color: 'rgb(22, 82, 240)'}} to="/dashboard">Cryptbase</NavLink></h2>
                <ul className="side-nav-logged-in">
                    <li className="side-nav-li"><NavLink to="/dashboard" onClick={() => recordReactGA("dashboard link")} activeClassName="selected-side-nav-links" className="side-nav-links">
                        <div className="side-div-1">
                            <div className="side-div-2">
                                <img src={window.homeImage} className="side-image-new"/>
                                                                {/* <img src={window.portfolioImage} className="side-image-new"/> */}

                            </div>
                        </div>
                        <span className="side-span">Home</span>
                        </NavLink>
                    </li>

                    <li className="side-nav-li"><NavLink activeClassName="selected-side-nav-links" onClick={() => recordReactGA("prices link")} to="/prices" className="side-nav-links">
                        <div className="side-div-1">
                            <div className="side-div-2">
                                <img src={window.pricesImage} className="side-image-new"/>
                            </div>
                        </div>
                        <span className="side-span">Prices</span>
                        </NavLink>
                    </li>
                    
                    <li className="side-nav-li"><a href="https://github.com/wellsniko" onClick={()=>recordReactGA("My Github Link")} target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                        <div className="side-nav-links">
                            <div className="side-div-1">
                                <div className="side-div-2">
                                    <img src={window.github1} className="side-image-new"/>
                                </div>
                            </div>
                            
                         <span className="side-span">My Github</span>
                        </div>
                        </a>
                    </li>



                    <li className="side-nav-li"><a href="https://github.com/wellsniko/cryptbase" onClick={() => recordReactGA("Cryptbase Repo link")} target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                        <div className="side-nav-links">
                            <div className="side-div-1">
                                <div className="side-div-2">
                                    <img src={window.github2} className="side-image-new"/>
                                </div>
                            </div>
                            
                         <span className="side-span">Cryptbase Repo</span>
                        </div>
                        </a>
                    </li>

                    <li className="side-nav-li"><a href="https://www.linkedin.com/in/niko-wells-16134aa0/" target="_blank" onClick={() => recordReactGA("LinkedIn Link")} rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                        <div className="side-nav-links">
                            <div className="side-div-1">
                                <div className="side-div-2">
                                    <img src={window.linkedin} className="side-image-new-2"/>
                                </div>
                            </div>
                            
                         <span className="side-span">LinkedIn</span>
                        </div>
                        </a>
                    </li>

                    <li className="side-nav-li"><a href="http://findyoursquad.herokuapp.com/#/" target="_blank" onClick={() => recordReactGA("Squad link")} rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                        <div className="side-nav-links">
                            <div className="side-div-1">
                                <div className="side-div-2">
                                    <img src={window.findyoursquad} className="side-image-new"/>
                                </div>
                            </div>
                            
                         <span className="side-span">FindYourSquad</span>
                        </div>
                        </a>
                    </li>

                    <li className="side-nav-li"><a href="https://wellsniko.github.io/fleet_space/" target="_blank" onClick={() => recordReactGA("Fleetspace link")} rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                        <div className="side-nav-links">
                            <div className="side-div-1">
                                <div className="side-div-2">
                                    <img src={window.fleetspace} className="side-image-new"/>
                                </div>
                            </div>
                            
                         <span className="side-span">Fleetspace</span>
                        </div>
                        </a>
                    </li>
                
                </ul>
            </nav> 
        </>
    )

     return currentUser ?  userHere() : null
}




export default SideNav;