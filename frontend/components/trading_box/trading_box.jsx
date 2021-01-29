import React from 'react';


class TradingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "0",
      backgroundId: "na",
      buyBoxId: "buy-box-main",
      buyAction: "first",
      sellAction: "first"


      // button: "BUY"
    }
    this.closeFormat = this.closeFormat.bind(this)
    this.handleBuy = this.handleBuy.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.handleSell = this.handleSell.bind(this);
  }

    onQuantityChange(e) {
        this.setState({quantity: e.target.value});
    }

    closeFormat(){
      if (this.state.backgroundId !== "na") {
        this.setState({
          backgroundId: "na",
          buyBoxId: "buy-box-main"                   
        })
      }
    }
    


    handleBuy() {


      if (this.state.buyAction === "first") {
        this.setState({
          backgroundId: "buy-box-modal-background",
          buyBoxId: "buy-box-main-modal",
          buyAction: "second"                
        })
      }

      else {
        this.props.removeErrors()
        const { userId, coinId, current_price, coin, fetchUser } = this.props;
        const { quantity } = this.state;
        const orderParams = { 
            quantity: Number(quantity/current_price),
            price: current_price,
            total_value: (quantity),
            coin_id: coinId, 
            user_id: userId,
            type: "BUY" 
        };
        // debugger
        
        this.props.buyCoin(orderParams);
        setTimeout(() => fetchUser(userId).then(()=> {
        if (this.props.errors.length < 1){
          alert(`You successfully purchased ${Number(quantity).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of ${coin.symbol}`);        
          this.setState({
            quantity: "0",
            backgroundId: "na",
            buyBoxId: "buy-box-main",
            buyAction: "first",
            sellAction: "first"           
          })
        }}), 200)

      }





        // .then(()=> {
        // if (this.props.errors.length < 1){
        //   alert(`You purchased $${Number(quantity).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of ${coin.symbol}`);
        // }})
        //  setTimeout(() => if (this.props.errors.length < 1){
        //   alert(`You purchased $${Number(quantity).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of ${coin.symbol}`);
        // })
        
                 
    }

    handleSell() {


      if (this.state.sellAction === "first") {
        this.setState({
          backgroundId: "buy-box-modal-background",
          buyBoxId: "buy-box-main-modal",
          sellAction: "second"                
        })
      }
      this.props.removeErrors()
        
        const { userId, coinId, current_price, coin, fetchUser } = this.props;
        const { quantity } = this.state;
        const orderParams = { 
            quantity: Number(quantity/current_price),
            price: current_price,
            total_value: (quantity),
            coin_id: coinId, 
            user_id: userId,
            type: "SELL" 
        };
        // debugger
        this.props.sellCoin(orderParams);                   
        // alert(`You sold ${quantity} ${coin.symbol}`);

        
        setTimeout(() => fetchUser(userId).then(()=> {
        if (this.props.errors.length < 1){
          alert(`You successfully sold ${Number(quantity).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of ${coin.symbol.toUpperCase()}`);
          this.setState({
            quantity: "0",
            backgroundId: "na",
            buyBoxId: "buy-box-main",
            buyAction: "first",
            sellAction: "first"           
          })
        }}), 200)
        
    }

    renderErrors() {
      return(
        <div className="error-danger">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </div>
      );
    }

    componentWillUnmount() {						
		  this.props.removeErrors();
	}



    render() {
      if (!this.props) {
        return <> </>
      }
   
       
        return (
          <div id={this.state.backgroundId} onClick={this.closeFormat}>
            <div className={this.state.buyBoxId} onClick={e => e.stopPropagation()}>
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
                          <span className="you-can-buy-up-to">You can buy up to {Number(this.props.state.entities.users[this.props.userId].wallets["usd"].quantity).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of {this.props.coin.name}</span>
                          <div className="one-time-purchase-1">
                            <button className="one-time-purchase-2">
                              One time purchase
                            </button>
                          </div>
                          <div >{this.renderErrors()}</div>
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
                              <p className="balance-buy-box">Your&nbsp;{this.props.coin.name}&nbsp;balance:</p>
                              <div className="buy-box-balance-2">
                                <p className="balance-buy-box-2">{(Number(this.props.state.entities.users[this.props.userId].wallets[this.props.coinId].quantity)).toFixed(2)}&nbsp;{this.props.coin.symbol}</p>
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
          </div>
        );
  }

}

export default TradingBox;