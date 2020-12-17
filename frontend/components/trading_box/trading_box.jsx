import React from 'react';


class TradingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "0",
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
        debugger
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
        <div className="buy-box-main">
          <div className="buy-box-2">
            <div className="buy-box-3">
              <div className="buy-box-4">
                <div className="buy-box-5">
                  <div className="buy-box-6">
                    <div className="buy-sell-convert">
                      <div className="buy-select">Buy</div>
                      <div className="sell-select">Sell</div>
                      <div className="convert-select">Convert</div>
                    </div>
                    <div className="buy-box-body">
                      <div className="buy-box-body-inside">
                        <div className="input-quantity-area">
                          <div className="input-quantity-area-2">
                            <div className="input-quantity-area-3">
                              <span className="input-span-buy">$</span>
                              <input className="input-quantity-input" type="decimal" placeholder={this.state.quantity} onChange={this.onQuantityChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="you-can-buy-up-to">You can buy up to ${this.props.state.entities.users[this.props.userId].wallets["usd"].quantity} of {this.props.coin.name}</span>
                      <div className="one-time-purchase-1">
                        <button className="one-time-purchase-2">

                        </button>
                      </div>
                      <div className="buy-box-body-inside">
                        <div>
                          <button className="buy-sell-button" onClick={this.handleBuy}>
                           <span className="buy-sell-button-span">BUY</span> 
                          </button>
                          <button className="buy-sell-button" onClick={this.handleSell}>
                            <span className="buy-sell-button-span">SELL</span> 
                          </button>
                        </div>
                      
                      </div>
                        {/* <span >Symbol: </span> <span >{this.props.coin.symbol}</span>
                        <br/>
                        <span >Current Price: </span> <span >{this.props.current_price}</span> */}
                        
                        <div className="buy-box-bottom">
                          <p className="balance-buy-box">{this.props.coin.name}&nbsp;balance</p>
                          <div className="buy-box-balance-2">
                            <p className="balance-buy-box-2">{this.props.state.entities.users[this.props.userId].wallets[this.props.coinId].quantity}&nbsp;{this.props.coin.symbol}</p>
                          </div>
                        </div>
                    </div>
                    {/* <h1>you own {this.props.state.entities.users[this.props.userId].wallets[this.props.coinId].quantity} of {this.props.coin.name}</h1> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
  }

}

export default TradingBox;