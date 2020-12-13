import React from 'react';
import { Link, withRouter } from 'react-router-dom';

{/* <Link to={`/price/${props.coin.id}`}></Link> */}


const PriceIndexItem = props => (
  
  <tr className="coin-index-item">
    <td id="t1-1">{props.coin.market_cap_rank} </td>
    <td id="t1-2"> <img src={`${props.coin.image}`} alt=""/>{props.coin.name}&nbsp;&nbsp;{props.coin.symbol}</td>
    <td id="t1-3"><Link to={`/prices/${props.coin.id}`}>{props.coin.current_price}</Link></td>
    <td id="t1-4">{props.coin.price_change_percentage_24h}</td>
    <td id="t1-5">{props.coin.market_cap}</td>
    <td id="t1-6"><button id="t1b">Trade</button></td>
    <td id="t1-7"><button>Watch</button></td>
  </tr>
);

export default PriceIndexItem;

