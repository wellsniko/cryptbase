import React from 'react';
import { Link } from 'react-router-dom';

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
                        <NuPriceIndexItem coin={coin}  key={idx} id={idx}/> //"bitcoin"
                      ))
                    }
                  </tbody>
                </table>
              </div> 
      
          // <div className="coin-index">
          //   <table id="coin-table">
          //     <thead id="t1-head">
          //       <tr id="t1-head-row">
          //         <th id="t1-h1">#</th>
          //         <th id="t1-h2">Name</th>
          //         <th id="t1-h3">Price</th>
          //         <th id="t1-h4">Change</th>
          //         <th id="t1-h5">Chart</th>
          //         <th id="t1-h6">Trade</th>
          //       </tr>
          //     </thead>
          //     <tbody id="coin-table-body">
          //       {
          //         coins.map(coin => (
          //           <NuPriceIndexItem coin={coin}  key={coin.id}/>
          //         ))
          //       }
          //     </tbody>
          //   </table>
          // </div>
    );
  }
}

export default NuPriceIndex;