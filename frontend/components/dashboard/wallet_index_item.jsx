import React from 'react';
import { Link, withRouter } from 'react-router-dom';

{/* <Link to={`/price/${props.coin.id}`}></Link> */}


const WalletIndexItem = props => {
    if (!props.coin) {
        return <></>
    }

  const numConverter = (num) => {

    return Math.abs(Number(num)) >= 1.0e+9
    ? "$" +(Math.abs(Number(num)) / 1.0e+9).toFixed(1) + "B"
    : Math.abs(Number(num)) >= 1.0e+6
    ? "$" +(Math.abs(Number(num)) / 1.0e+6).toFixed(1) + "M"
    : Math.abs(Number(num)) >= 1.0e+3
    ? "$" +(Math.abs(Number(num)) / 1.0e+3).toFixed(1) + "K"
    : Math.abs(Number(num));
}




  const colorChooser = (percentage)=> {
    return percentage >= 0 ? {color:`rgb(5, 177, 105)`} : {color:`rgb(223, 95, 103)`};
  }
  const {wallet} = props;
  // console.log(this.props)
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

     <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1">
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
)};

export default WalletIndexItem;

