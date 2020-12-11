import React from 'react';
import { Link } from 'react-router-dom';

import CoinIndexItem from './coin_index_item';

/*
Export a `ReportIndex` presentational component that renders a list (`ul`) of
`ReportIndexItems`. This component should receive `reports` from the store as a
prop via its container and fetch them once it has successfully mounted to the
DOM. Below the `ul`, add a link to the new report page with text 'New Report'.
*/

class CoinIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    const { coins} = this.props;
    return (
      <div className="coin-index">
        <ul>
          {
            coins.map(coin => (
              <CoinIndexItem coin={coin}  key={coin.id}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default CoinIndex;