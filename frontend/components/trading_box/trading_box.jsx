import React from 'react';


class TradingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "Quantity"
    }
    // console.log(this.state)
    this.handleBuy = this.handleBuy.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
  }

    onQuantityChange(e) {
        this.setState({quantity: e.target.value});
    }


    handleBuy() {
        
        const { userId, coinId, current_price, coin } = this.props;
        const { quantity } = this.state;
        const orderParams = { 
            quantity: Number(quantity),
            price: current_price,
            total_value: (current_price * quantity),
            coin_id: coinId, 
            user_id: userId,
            type: "BUY" 
        };
        // debugger
        this.props.buyCoin(orderParams);                   
        alert(`You purchased ${quantity} ${coin.symbol}`);

    }



    render() {
        // console.log(this.props.current_price)
        return (
        <div >
            <div  >&times;</div>
            <span >Symbol: </span> <span >{this.props.coin.symbol}</span>
            <br/>
            <span >Current Price: </span> <span >{this.props.current_price}</span>
            <input type="text" placeholder={this.state.quantity} onChange={this.onQuantityChange}/>
            <button onClick={this.handleBuy}>BUY</button>
            <button>SELL</button>
        </div>
        );
  }

}

export default TradingBox;