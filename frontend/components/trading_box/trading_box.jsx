import React from 'react';

class TradingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "",
      backgroundId: "na",
      buyBoxId: "buy-box-main",
      buyAction: "first",
      sellAction: "hidden"
    }

    this.closeFormat = this.closeFormat.bind(this)
    this.handleBuy = this.handleBuy.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.handleSell = this.handleSell.bind(this);
    // this.handleFromIndex = this.handleFromIndex.bind(this)
  }

      
    onQuantityChange(e) {
      !Number(e.currentTarget.value) && (e.currentTarget.value !== "" ) && (e.currentTarget.value !== ".") && (e.currentTarget.value !== 0) ? null :
        this.setState({
          quantity: e.currentTarget.value,
        });
     }   

    closeFormat(){
      if (this.state.backgroundId !== "na") {
        this.setState({
          backgroundId: "na",
          buyBoxId: "buy-box-main",
          buyAction: "first",
          sellAction: "hidden"                 
        })
        
      }
      this.props.removeErrors()
    }
    


    handleBuy() {

      if (this.state.buyAction === "first") {
        this.setState({
          backgroundId: "buy-box-modal-background",
          buyBoxId: "buy-box-main-modal",
          buyAction: "second",
          sellAction: "hidden"                
        })
      } else if (this.state.buyAction === "hidden" && this.state.sellAction === "second") {
        this.setState({
          // backgroundId: "buy-box-modal-background",
          // buyBoxId: "buy-box-main-modal",
          sellAction: "hidden",
          buyAction: "second"               
        })
      }        else if (this.state.buyAction === "hidden") {
        this.setState({
          // backgroundId: "buy-box-modal-background",
          // buyBoxId: "buy-box-main-modal",
          buyAction: "first",
          sellAction: "hidden"                
        })

      } else {
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
        
        this.props.buyCoin(orderParams);
        setTimeout(() => fetchUser(userId).then(()=> {
        if (this.props.errors.length < 1){
          alert(`You successfully purchased ${Number(quantity).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of ${coin.symbol.toUpperCase()}`);        
          this.setState({
            quantity: "",
            backgroundId: "na",
            buyBoxId: "buy-box-main",
            buyAction: "first",
            sellAction: "hidden"           
          })
          if (this.props.fromIndex)this.props.helperParent()
        }}), 250)
      }
                 
    }



    handleSell() {

      if (this.state.sellAction === "first") {
        this.setState({
          backgroundId: "buy-box-modal-background",
          buyBoxId: "buy-box-main-modal",
          sellAction: "second",
          buyAction: "hidden"               
        })
      } else if (this.state.sellAction === "hidden" && this.state.buyAction === "second") {
        this.setState({
          // backgroundId: "buy-box-modal-background",
          // buyBoxId: "buy-box-main-modal",
          sellAction: "second",
          buyAction: "hidden"               
        })
      }  else if (this.state.sellAction === "hidden") {
        this.setState({
          // backgroundId: "buy-box-modal-background",
          // buyBoxId: "buy-box-main-modal",
          sellAction: "first",
          buyAction: "hidden"               
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
            type: "SELL" 
        };

        this.props.sellCoin(orderParams);                   
        setTimeout(() => fetchUser(userId).then(()=> {
        if (this.props.errors.length < 1){
          alert(`You successfully sold ${Number(quantity).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of ${coin.symbol.toUpperCase()}`);
          this.setState({
            quantity: "",
            backgroundId: "na",
            buyBoxId: "buy-box-main",
            buyAction: "hidden",
            sellAction: "first"           
          })
          if (this.props.fromIndex) this.props.helperParent()
        }}), 250)

      }
        
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

    componentDidMount(){
      this.handleFromIndex()
    }

    handleFromIndex(){
      if (this.props.fromIndex){
      this.setState({
          backgroundId: "buy-box-modal-background",
          buyBoxId: "buy-box-main-modal",
          buyAction: "first",
          sellAction: "hidden"
      })} else {
        return null
      }
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
                          <div style={{borderRight: '1px solid rgb(236, 239, 241)'}} className={this.state.buyAction === 'hidden' ? "buy-sell-not-selected" : "buy-sell-selected"} onClick={this.state.buyAction === "hidden" ? this.handleBuy : null}>Buy</div>
                          <div className={this.state.sellAction === 'hidden' ? "buy-sell-not-selected" : "buy-sell-selected"}  onClick={this.state.sellAction === "hidden" ? this.handleSell : null}>Sell</div>
                          {/* <div className="convert-select">Convert</div> */}
                        </div>
                        <div className="buy-box-body">

                        <div>

                          <div className="buy-box-body-inside">
                            <div className="input-quantity-area">
                              <div className="input-quantity-area-2">
                                <div className="input-quantity-area-3">
                                  <span className="input-span-buy">$</span>
                                  <input className="input-quantity-input" type="decimal" value={this.state.quantity} placeholder="0" onChange={this.onQuantityChange}/>
                                </div>
                              </div>
                            </div>
                          </div>
                          {this.state.buyAction === "hidden" ?   <span className="you-can-buy-up-to">You can sell up to {Number((this.props.state.entities.users[this.props.userId].wallets[this.props.coin.id].quantity)*this.props.current_price).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of {this.props.coin.name}</span>:
                          <span className="you-can-buy-up-to">You can buy up to {Number(this.props.state.entities.users[this.props.userId].wallets["usd"].quantity).toLocaleString('en-US', {style: 'currency',currency: 'USD'})} of {this.props.coin.name}</span>}
                          
                          </div>
                          
                          <div id="trading-image-div">

                            <img id="trading-image" src={this.props.coin.image} alt=""/>
                          </div>
                          
                          <div className="one-time-purchase-1">
                            <button className="one-time-purchase-2">
                              One time purchase
                            </button>
                          </div>

                        <div>
                          <div >{this.renderErrors()}</div>
                          <div className="buy-box-body-inside">
                            <div>

                              { this.state.buyAction === "hidden" ? null : this.state.buyAction === "second" ? <button className="buy-sell-button" onClick={this.handleBuy}>
                              <span className="buy-sell-button-span">Buy now</span> 
                              </button> :<button className="buy-sell-button" onClick={this.handleBuy}>
                              <span className="buy-sell-button-span">Buy {this.props.coin.name}</span> 
                              </button>}
                              {this.state.sellAction === "hidden" ? null : this.state.sellAction === "second" ? <button className="buy-sell-button" onClick={this.handleSell}>
                                <span className="buy-sell-button-span">Sell now</span> 
                              </button> : <button className="buy-sell-button" onClick={this.handleSell}>
                                <span className="buy-sell-button-span">Sell {this.props.coin.name}</span> 
                              </button>}
                              
                            </div>
                          
                          </div>
                            
                            <div className="buy-box-bottom">
                              <p className="balance-buy-box">Your&nbsp;{this.props.coin.name}&nbsp;balance:</p>
                              <div className="buy-box-balance-2">
                                <p className="balance-buy-box-2">{(Number(this.props.state.entities.users[this.props.userId].wallets[this.props.coinId].quantity)).toFixed(2)}&nbsp;{this.props.coin.symbol}</p>
                              </div>
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