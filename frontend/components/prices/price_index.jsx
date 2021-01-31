import React from 'react';
import PriceIndexItem from './price_index_item';


class PriceIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    if (!this.props.coins){
      return <> </>
    }
    if (!this.props.coins["bitcoin"]) {
      return null
    }

    const { coins} = this.props;
    const colorChooser = (percentage)=> {
      return percentage >= 0 ? {color:`rgb(5, 177, 105)`} : {color:`rgb(223, 95, 103)`};
    }

    let implication
    if (((coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /2) < 0) {
      implication = "down"
    } else {
      implication = "up"
    }

    return (
      <>
        <div className="main-user-page">
          <div className="main-user-page-2">
            <div className ="price-index-body">
            <div className="price-index-title">
             <h1>
               <span id="in-last-24">In the past 24 hours</span>
               <span id="market-is">Market is {`${implication}`}&nbsp;</span> 
               <span style={colorChooser((coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /2)}>
                  {(coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /2 >= 0 ?
                  ((coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /2).toFixed(2) + "%" :
                  ((coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /-2).toFixed(2) + "%"}</span>
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
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">&nbsp;&nbsp;&nbsp;Trade</label></div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Watch</label></div></th>
                    </tr>
                  </thead>
                  <tbody className="coin-table-body">
                    {
                      Object.values(coins).map((coin, idx) => (
                        <PriceIndexItem coin={coin}  key={idx} id={idx}/>
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
                    