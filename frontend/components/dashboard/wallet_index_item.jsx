import React from 'react';
import { Link} from 'react-router-dom';

const WalletIndexItem = props => {

  if (!props.coin) {
        return null
  }

  const {wallet} = props;

  return (

    <tr className="price-index-row">

      <td className="t2-r1"> 
        <Link to={`/prices/${props.coin.id}`} className="index-link" style={{ textDecoration: 'none' }}>
          <img className="index-image" src={`${props.coin.image}`} alt=""/>
            <div className="div-t2-r1" > 
              <label style={{color: `black`}}>&nbsp;&nbsp;&nbsp;{props.coin.name}&nbsp;&nbsp;</label>
            </div>
        </Link> 
      </td>

      <td className="t2-r1">
        <div className="div-t2-r1">
          <label className="label-t2-r1">
            <div className="div-t2-r1" > 
              <label style={{color: `black`}}>{(props.value).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}&nbsp;&nbsp;</label>
              <label style={{color: `rgba(17, 51, 83, 0.6)`}}>{wallet.quantity}&nbsp;{props.coin.symbol.toUpperCase()}</label>
            </div>
          </label>
        </div> 
      </td>
      
      <td className="t2-r1">
          <div className="div-t2-new">
            <label className="label-t2-r1" >
              {wallet.orders.length}
            </label>
          </div> 
      </td>

    </tr>
  )
};

export default WalletIndexItem;

