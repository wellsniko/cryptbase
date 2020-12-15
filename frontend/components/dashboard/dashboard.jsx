import React from 'react';
import { Link } from 'react-router-dom';

import CoinIndexItem from '../prices/nu_price_index_item';


class CoinIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    const { coins} = this.props;
    return (
        <div className="main-user-page">
          <div className="main-user-page-2">
                <div className="dashboard-body">
                  <div className="dashboard-body-2">
                  <div className="dashboard-body-left">
                    <div className="dashboard-left-down-1">
                      <div className="dashboard-left-chart">
                        <div className="chart-box">
                          
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-left-down-2"></div>
                  </div>
                  <div className="dashboard-body-right"></div>
              </div>  
           </div>
          </div>
        </div>
        
            
       
    );
  }
}

export default CoinIndex;