import React from 'react';
import { Link, withRouter } from 'react-router-dom';

{/* <Link to={`/price/${props.coin.id}`}></Link> */}


const OrderIndexItem = props => {
    if (!props.order) {
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
  const {order} = props;

return (
    <div className="order-row-item">
       {Number(order.quantity).toFixed(2)}&nbsp;&nbsp;&nbsp;&nbsp;{order.coin_id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{order.transaction_type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{new Date (order.created_at).toLocaleString("en-US", {day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric"})}
    </div>


)};

export default OrderIndexItem;

