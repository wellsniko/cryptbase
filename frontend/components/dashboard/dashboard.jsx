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
        <div className="user-box">
            <div className="portfolio-value">
                <h1>-User Portfolio Value-  <br/> Click Prices on right.</h1>
            </div>
        </div>
    );
  }
}

export default CoinIndex;