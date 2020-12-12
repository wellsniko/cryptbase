import React from 'react';
import { Link } from 'react-router-dom';

import CoinIndexItem from '../coins/coin_index_item';


class CoinIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    const { coins} = this.props;
    return (
      <div className="coin-index">
        <table id="coin-table">
          <thead id="t1-head">
            <tr id="t1-head-row">
              <th id="t1-h1">#</th>
              <th id="t1-h2">This</th>
              <th id="t1-h3">is the Dashboard.</th>
              <th id="t1-h4">Click</th>
              <th id="t1-h5">prices</th>
              <th id="t1-h6">on left.</th>
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
    );
  }
}

export default CoinIndex;