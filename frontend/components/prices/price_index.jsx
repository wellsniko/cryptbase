import React from 'react';
import { Link } from 'react-router-dom';

import PriceIndexItem from './price_index_item';


class PriceIndex extends React.Component {
  componentDidMount() {
    
    this.props.fetchCoins();
  }


  

  render() {
    if (!this.props.coins){
      return <> </>
    }

    const { coins} = this.props;
    // debugger
    // let newPercentage;
    // coins == undefined ? newPercentage = null : newPercentage = (coins[0].price_change_percentage_24h >= 0 ? "+" + coins[0].price_change_percentage_24h.toFixed(2)+"%" : "-" + coins[0].price_change_percentage_24h + "%" );
    const colorChooser = (percentage)=> {
    return percentage >= 0 ? {color:`rgb(5, 177, 105)`} : {color:`rgb(223, 95, 103)`};
  }
  console.log(coins)

    
    
    return (
      <>

        <div className="main-user-page">
          <div className="main-user-page-2">
            <div className ="price-index-body">
            <div className="price-index-title">
             <h1>
               <span id="in-last-24">In the last 24 hours</span>
               {/* coins[0] not working!!! */}
               <span id="market-is">Market is </span> <span style={{color:`rgb(5, 177, 105)`}}>+3.2%</span><span id="market-is">&nbsp;in last 24 hours </span>
             </h1>
            </div>
              <section className="price-index-section">
              <div className="price-index">
                <table id="price-table">
                  <thead id="t2-head">
                    <tr id="t2-head-row">
                      <th className="t2-h1"> <div className="div-t2-h1"><label className="label-t2-h1">#</label></div> </th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Name</label></div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Price</label></div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Change</label></div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Market Cap</label></div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Trade</label></div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Watch</label></div></th>
                    </tr>
                  </thead>
                  <tbody className="coin-table-body">
                    {
                      coins.map((coin, idx) => (
                        <PriceIndexItem coin={coin}  key={idx} id={idx}/> //"bitcoin"
                      ))
                    }
                  </tbody>
                </table>
              </div> 
              </section>
            </div>
        </div>
      </div>
     </>
    );
  }
}

export default PriceIndex;            
                    
                    
                    
                    // <div className="coin-index-dashboard">
                    //   <CoinIndexContainer/>
                    // </div>