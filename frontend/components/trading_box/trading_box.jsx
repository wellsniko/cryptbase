import React from 'react';


class TradingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "Quantity"
    }
 
    this.handleBuy = this.handleBuy.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.handleSell = this.handleSell.bind(this);
  }

    onQuantityChange(e) {
        this.setState({quantity: e.target.value});
    }

    


    handleBuy() {
        
        const { userId, coinId, current_price, coin, fetchUser } = this.props;
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
        setTimeout(() => fetchUser(userId), 100)
        
    }

    handleSell() {
        
        const { userId, coinId, current_price, coin, fetchUser } = this.props;
        const { quantity } = this.state;
        const orderParams = { 
            quantity: Number(quantity),
            price: current_price,
            total_value: (current_price * quantity),
            coin_id: coinId, 
            user_id: userId,
            type: "SELL" 
        };
        // debugger
        this.props.sellCoin(orderParams);                   
        alert(`You sold ${quantity} ${coin.symbol}`);
        setTimeout(() => fetchUser(userId), 100)
        
    }



    render() {
   
       
        return (
        <div >
            <div  >&times;</div>
            <span >Symbol: </span> <span >{this.props.coin.symbol}</span>
            <br/>
            <span >Current Price: </span> <span >{this.props.current_price}</span>
            <input type="text" placeholder={this.state.quantity} onChange={this.onQuantityChange}/>
            <button onClick={this.handleBuy}>BUY</button>
            <button onClick={this.handleSell}>SELL</button>

            <h1>you own {this.props.state.entities.users[this.props.userId].wallets[this.props.coinId].quantity} of {this.props.coin.name}</h1>
        </div>
        );
  }

}

export default TradingBox;