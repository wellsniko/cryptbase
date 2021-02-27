import React from 'react';

const OrderIndexItem = props => {

    if (!props.order || !props.coin) {
        return null
    }

  const {order} = props;
  return (
      <div className="order-row-item">
        <div className="order-image-div">
          <img className="coin-order-image" src={`${props.coin.image}`} alt=""/>
        </div>
        <div>
          <h4 className="order-h4">{order.transaction_type === "BUY" ? `Bought ${props.coin.name}` : `Sold ${props.coin.name}`}</h4>
          <p className="order-p">{order.transaction_type === "BUY" ? `+${Number(order.quantity).toFixed(4)}` : `-${Number(order.quantity).toFixed(4)}`}&nbsp;on&nbsp;{new Date (order.created_at).toLocaleString("en-US", {day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric"})} at<br/>{Number(order.price).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</p>
        </div>
        <label className="order-right">{(Number(order.price) * Number(order.quantity)).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</label>
        {/* {Number(order.quantity).toFixed(4)}&nbsp;&nbsp;&nbsp;&nbsp;{order.coin_id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{new Date (order.created_at).toLocaleString("en-US", {day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric"})} */}
      </div>
  )
};

export default OrderIndexItem;

