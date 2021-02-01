import React from "react";
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

const TopNav = (props) => {

  const getTitle = () => {
    switch (props.location.pathname){
      case "/dashboard": 
          return "Home"
      case "/portfolio":
        return "Portfolio"
      case "/rewards":
        return "Rewards"
      case "/rewards":
        return "Rewards"
      default:
        return "Prices"
      
    }
  }

  const userHere = () => (
    <nav className="main-top-nav">
     
        <div className="top-nav-div-1">{getTitle()}</div>
        <div className="top-nav-div-2"></div>
        <div className="top-nav-div-3">
          <div className="top-nav-div-3-3">
            <div className="top-nav-div-1-1">
              <button className="top-nav-buy-sell">
                <Link to={`/prices`} style={{ textDecoration: 'none', color: "white"}}><span className="span-top-buy-sell">Buy / Sell</span></Link>
              </button>
            
            </div>
            <div className="top-nav-div-1-2">
              <button className="logout-top-nav" onClick={props.logout}>
                <span className="logout-span-top">Log Out</span>
              </button>
            </div>
          </div>
        </div>
    </nav>
  )


  return props.currentUser ? userHere() : <> </>
};



export default withRouter(TopNav);
