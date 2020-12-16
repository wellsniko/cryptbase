import React from 'react';
import { Link } from 'react-router-dom';

import CoinIndexItem from '../prices/nu_price_index_item';


class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    if (!this.props.state) {
      return <> </> 
    }
    const { coins, currentUser} = this.props;

    const wallets = currentUser.wallets
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
                    <div className="dashboard-left-down-2">
                        <div className="your-assets-1">
                          <div className="your-assets-top">
                            <h2 className="your-assets-header">Your Assets</h2>
                             {
                      Object.values(wallets).map((wallet, idx) => (
                       <li>{wallet.quantity}</li> //"bitcoin"
                      ))
                    }
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="dashboard-body-right">
                         
                  </div>
              </div>  
           </div>
          </div>
        </div>
        
            
       
    );
  }
}

export default Dashboard;