import React from "react";
import { NavLink} from 'react-router-dom'

const SideNav = ({ currentUser}) => {

    const userHere = () => (
        <>
            <nav className="side-nav">
                <h2 id="logo-logged-in"><NavLink style={{textDecoration: "none", color: 'rgb(22, 82, 240)'}} to="/dashboard">Cryptbase</NavLink></h2>
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

                    <li className="side-nav-li"><NavLink activeClassName="selected-side-nav-links" to="/prices" className="side-nav-links">
                        <div className="side-div-1">
                            <div className="side-div-2">
                                <img src={window.pricesImage} className="side-image-new"/>
                            </div>
                        </div>
                        <span className="side-span">Prices</span>
                        </NavLink>
                    </li>
                    
                    <li className="side-nav-li"><a href="https://github.com/wellsniko" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                        <div className="side-nav-links">
                            <div className="side-div-1">
                                <div className="side-div-2">
                                    <img src={window.portfolioImage} className="side-image-new"/>
                                </div>
                            </div>
                            
                         <span className="side-span">My Github</span>
                        </div>
                        </a>
                    </li>



                    <li className="side-nav-li"><a href="https://github.com/wellsniko/cryptbase" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                        <div className="side-nav-links">
                            <div className="side-div-1">
                                <div className="side-div-2">
                                    <img src={window.giftImage} className="side-image-new"/>
                                </div>
                            </div>
                            
                         <span className="side-span">Cryptbase Repo</span>
                        </div>
                        </a>
                    </li>

                    <li className="side-nav-li"><a href="https://www.linkedin.com/in/niko-wells-16134aa0/" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                        <div className="side-nav-links">
                            <div className="side-div-1">
                                <div className="side-div-2">
                                    <img src={window.bellImage} className="side-image-new"/>
                                </div>
                            </div>
                            
                         <span className="side-span">LinkedIn</span>
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