import React from 'react';
import { Link, withRouter } from 'react-router-dom';


/* <Link to={`/coins/${props.coin.id}`}>{props.coin.symbol}</Link> */

const CoinIndexItem = props => (
  <tr className="coin-index-item">
    <td id="t1-1">{props.coin.market_cap_rank}</td>
    <td id="t1-2"> <img src={`${props.coin.image}`} alt=""/>{props.coin.name}&nbsp;&nbsp;{props.coin.symbol}</td>
    <td id="t1-3">{props.coin.current_price}</td>
    <td id="t1-4">{props.coin.price_change_percentage_24h}</td>
    <td id="t1-5">Mini Chart</td>
    <td id="t1-6"><button id="t1b">Trade</button></td>
  </tr>
);

export default CoinIndexItem;

