import React from 'react';
import { Link, withRouter } from 'react-router-dom';




const NuPriceIndexItem = props => {

    const numConverter = (num) => {

    // Nine Zeroes for Billions
    return Math.abs(Number(num)) >= 1.0e+9
    ? "$" +(Math.abs(Number(num)) / 1.0e+9).toFixed(1) + "B"
    : Math.abs(Number(num)) >= 1.0e+6
    ? "$" +(Math.abs(Number(num)) / 1.0e+6).toFixed(1) + "M"
    : Math.abs(Number(num)) >= 1.0e+3
    ? "$" +(Math.abs(Number(num)) / 1.0e+3).toFixed(1) + "K"
    : Math.abs(Number(num));
}

return (




    <tr className="price-index-row">
    
     <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1" style={{color: `rgba(17, 51, 83, 0.6)`}}>{props.coin.market_cap_rank}</label></div> </td>
     <td className="t2-r1"> 
      <Link to={`/signup`} className="index-link" style={{ textDecoration: 'none' }}>

        <img className="index-image" src={`${props.coin.image}`} alt=""/>

          <div className="div-t2-r1" > 
            <label style={{color: `black`}}>&nbsp;&nbsp;&nbsp;{props.coin.name}&nbsp;&nbsp;</label>
            <label style={{color: `rgba(17, 51, 83, 0.6)`}}>{props.coin.symbol.toUpperCase()}</label>
          
          </div>
      
      </Link> 
    </td>
     <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1">{(props.coin.current_price).toLocaleString('en-US', {style: 'currency',currency: 'USD',
})}</label></div> </td>
     <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1">{props.coin.price_change_percentage_24h >= 0 ? "+" + (props.coin.price_change_percentage_24h).toFixed(2) + "%" : (props.coin.price_change_percentage_24h).toFixed(2) + "%"}</label></div> </td>
     <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1">{numConverter(props.coin.market_cap)}</label></div> </td>
     <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1"> <button id="nu-index-trade-button">Buy</button>  </label></div> </td>

  </tr>
  // <tr className="coin-index-item">
  //   <td id="t1-1">{props.coin.market_cap_rank} </td>
  //   <td id="t1-2"> <img src={`${props.coin.image}`} alt=""/>{props.coin.name}&nbsp;&nbsp;{props.coin.symbol}</td>
  //   <td id="t1-3">{props.coin.current_price}</td>
  //   <td id="t1-4">{props.coin.price_change_percentage_24h}</td>
  //   <td id="t1-5">Mini Chart</td>
  //   <td id="t1-6"><button id="t1b">Trade</button></td>
  // </tr>
)};

export default NuPriceIndexItem;

