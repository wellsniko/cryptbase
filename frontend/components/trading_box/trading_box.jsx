import React from 'react';


class TradingBox extends React.Component {
  constructor(props) {
    super(props);

       this.state = {
      
      quantity: "Quantity"
    }
    console.log(this.state)
  }

    onQuantityChange(e) {
        this.setState({
        quantity: e.target.value
        });
    }
    render() {
        // console.log(this.props.current_price)




    return (
      <div >
        <div  >&times;</div>
          <span >Symbol: </span> <span >{this.props.coin.symbol}</span>
          <br/>
        <span >Current Price: </span> <span >{this.props.current_price}</span>
        <input  
          type="text" 
          placeholder={this.state.quantity}
          onChange={this.onQuantityChange}/>
        <button onClick={this.handleBuy}>BUY</button>
        <button  >SELL</button>
      </div>
    );
  }

}

export default TradingBox;