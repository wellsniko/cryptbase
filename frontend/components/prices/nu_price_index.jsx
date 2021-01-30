import React from 'react';
import NuPriceIndexItem from './nu_price_index_item';

class NuPriceIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {

    const { coins} = this.props;

    return (
      <div className="price-index">
        <table id="price-table">
          <thead id="t2-head">
            <tr id="t2-head-row">
              <th className="t2-h1"> <div className="div-t2-h1"><label className="label-t2-h1">#</label></div> </th>
              <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Name</label></div></th>
              <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Price</label></div></th>
              <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Change</label></div></th>
              <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Chart</label></div></th>
              <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Trade</label></div></th>
              
            </tr>
          </thead>
          <tbody className="coin-table-body">
            {
              coins.map((coin, idx) => (
                <NuPriceIndexItem coin={coin}  key={idx} id={idx}/> 
              ))
            }
          </tbody>
        </table>
      </div> 
    );
  }
}

export default NuPriceIndex;