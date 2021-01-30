import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TradingBoxContainer from '../trading_box/trading_box_container'

{/* <Link to={`/price/${this.props.coin.id}`}></Link> */}


class PriceIndexItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        priceBox: false

      }
      this.closeFormat = this.closeFormat.bind(this)
    }

    // componentDidUpdate(){
    //   this.setState({priceBox: false})
    // }
  closeFormat(){
   
        this.setState({
          priceBox: false                  
        })
      }
    

  render() {

    const numConverter = (num) => {

      return Math.abs(Number(num)) >= 1.0e+9
      ? "$" +(Math.abs(Number(num)) / 1.0e+9).toFixed(1) + "B"
      : Math.abs(Number(num)) >= 1.0e+6
      ? "$" +(Math.abs(Number(num)) / 1.0e+6).toFixed(1) + "M" : Math.abs(Number(num)) >= 1.0e+3
      ? "$" +(Math.abs(Number(num)) / 1.0e+3).toFixed(1) + "K"
      : Math.abs(Number(num));
    }

  const colorChooser = (percentage)=> {
    return percentage >= 0 ? {color:`rgb(5, 177, 105)`} : {color:`rgb(223, 95, 103)`};
  }

  // const changeBackground = (e) => {
  //   e.target.style.background = 'red';
  // }
  

  // const removeBackground = (e) => {
  //   e.target.style.background = 'none';
  // }
        
  return (
    
    <tr className="price-index-row" >
    
    

     
      
      <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1" style={{color: `rgba(17, 51, 83, 0.6)`}}>{this.props.id + 1}</label></div> </td>
      <td className="josh"> 
        <Link to={`/prices/${this.props.coin.id}`} className="index-link" style={{ textDecoration: 'none' }}>

          <img className="index-image" src={`${this.props.coin.image}`} alt=""/>

            <div className="div-t2-r1" > 
              <label style={{color: `black`}}>&nbsp;&nbsp;&nbsp;{this.props.coin.name}&nbsp;&nbsp;</label>
              <label style={{color: `rgba(17, 51, 83, 0.6)`}}>{this.props.coin.symbol.toUpperCase()}</label>
            
            </div>
        
        </Link> 
      </td>
      <td className="t2-r1"> <div className="div-t2-r1">{this.state.priceBox ? 
      <div onClick={this.closeFormat}>
      <TradingBoxContainer fromIndex={this.state.priceBox} coin={this.props.coin} coinId={this.props.coin.id}/> 
      </div>
      : null}
      <label className="label-t2-r1">{(this.props.coin.current_price).toLocaleString('en-US', {style: 'currency',currency: 'USD',
         })}</label></div> </td>
      <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1" style={colorChooser(this.props.coin.price_change_percentage_24h)}>{this.props.coin.price_change_percentage_24h >= 0 ? "+" + (this.props.coin.price_change_percentage_24h).toFixed(2) + "%" : (this.props.coin.price_change_percentage_24h).toFixed(2) + "%"}</label></div> </td>
      <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1">{numConverter(this.props.coin.market_cap)}</label></div> </td>
      <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1"> <button id="index-trade-button" onClick={() => this.setState({priceBox: true})}>Trade</button>  </label></div> </td>
      <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1" id="price-index-star">&#9734;</label></div> </td>
    </tr>
  )}
}

export default PriceIndexItem;

