import React from 'react';
import { Link } from 'react-router-dom';

import CoinIndexItem from '../coins/coin_index_item';


class PriceIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    const { coins} = this.props;
    return (
      <div className ="home-coins">
      <div className="coin-index">
        <table id="coin-table">
          <thead id="t1-head">
            <tr id="t1-head-row">
              <th id="t1-h1">#</th>
              <th id="t1-h2">Name</th>
              <th id="t1-h3">Price</th>
              <th id="t1-h4">Change</th>
              <th id="t1-h5">Chart</th>
              <th id="t1-h6">Trade</th>
            </tr>
          </thead>
          <tbody id="coin-table-body">
            {
              coins.map(coin => (
                <CoinIndexItem coin={coin}  key={coin.id}/>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default PriceIndex;            
                    
                    
                    
                    // <div className="coin-index-dashboard">
                    //   <CoinIndexContainer/>
                    // </div>