import React, {PureComponent} from 'react';
import PriceIndexItem from './price_index_item';


class PriceIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sortParams: "marketCap",
        sortWay: "DESC"

      }
      this.filterCoins = this.filterCoins.bind(this);
    }


  componentDidMount() {
    this.props.fetchCoins();
  }


  filterCoins(param){
    if (this.state.sortParams !== param) {
      this.setState({
        sortParams: param,
        sortWay: "DESC"
      })
    } else if (this.state.sortParams === param && this.state.sortWay === "DESC") {
      this.setState({
        sortParams: param,
        sortWay: "ASC"
      })
    } else if (this.state.sortParams === param && this.state.sortWay === "ASC") {
      this.setState({
        sortParams: param,
        sortWay: "DESC"
      })
    } else { this.setState({ sortParams: param, sortWay: "DESC"})}
  }


  render() {
    if (!this.props.coins){
      return <> </>
    }
    if (!this.props.coins["bitcoin"]) {
      return null
    }

    const { coins} = this.props;

    const colorChooser = (percentage)=> {
      return percentage >= 0 ? {color:`rgb(5, 177, 105)`} : {color:`rgb(223, 95, 103)`};
    }

    let implication
    if (((coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /2) < 0) {
      implication = "down"
    } else {
      implication = "up"
    }


    // let walletArray = []
    // let totalBalance = 0
    let coinList

    if (this.state.sortParams === "marketCap" && this.state.sortWay === "DESC") {
      coinList = Object.values(coins).sort((a, b) => (a.market_cap < b.market_cap) ? 1 : (a.market_cap === b.market_cap) ? ((a.market_cap < b.market_cap) ? 1 : -1) : -1)       
    } else if (this.state.sortParams === "marketCap" && this.state.sortWay === "ASC") {
      coinList = Object.values(coins).sort((b, a) => (a.market_cap < b.market_cap) ? 1 : (a.market_cap === b.market_cap) ? ((a.market_cap < b.market_cap) ? 1 : -1) : -1)       
    } else if (this.state.sortParams === "price" && this.state.sortWay === "DESC") {
      coinList = Object.values(coins).sort((a, b) => (a.current_price < b.current_price) ? 1 : (a.current_price === b.current_price) ? ((a.current_price < b.current_price) ? 1 : -1) : -1)       
    } else if (this.state.sortParams === "price" && this.state.sortWay === "ASC") {
      coinList = Object.values(coins).sort((b, a) => (a.current_price < b.current_price) ? 1 : (a.current_price === b.current_price) ? ((a.current_price < b.current_price) ? 1 : -1) : -1)       
    } else if (this.state.sortParams === "name" && this.state.sortWay === "DESC") {
      coinList = Object.values(coins).sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : (a.name.toUpperCase() === b.name.toUpperCase()) ? ((a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1) : -1) 
    } else if (this.state.sortParams === "name" && this.state.sortWay === "ASC") {
      coinList = Object.values(coins).sort((b, a) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : (a.name.toUpperCase() === b.name.toUpperCase()) ? ((a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1) : -1)       
    } else if (this.state.sortParams === "priceChange" && this.state.sortWay === "DESC") {
      coinList = Object.values(coins).sort((b, a) => (a.price_change_percentage_24h < b.price_change_percentage_24h) ? 1 : (a.price_change_percentage_24h === b.price_change_percentage_24h) ? ((a.price_change_percentage_24h < b.price_change_percentage_24h) ? 1 : -1) : -1)       
    } else if (this.state.sortParams === "priceChange" && this.state.sortWay === "ASC") {
      coinList = Object.values(coins).sort((a, b) => (a.price_change_percentage_24h < b.price_change_percentage_24h) ? 1 : (a.price_change_percentage_24h === b.price_change_percentage_24h) ? ((a.price_change_percentage_24h < b.price_change_percentage_24h) ? 1 : -1) : -1)       
    } else {
      coinList = Object.values(coins).sort((a, b) => (a.market_cap < b.market_cap) ? 1 : (a.market_cap === b.market_cap) ? ((a.market_cap < b.market_cap) ? 1 : -1) : -1)  
    }


    const triangleSorter = (arg) => {
      if (arg !== this.state.sortParams) {
        return null
      } else if (arg === this.state.sortParams && this.state.sortWay === "DESC") {
        return (                      
          <div id="sorting-triangles">
            <div id="grey-triangle">&#x25B2;</div>
            <div id="selected-triangle">&#x25BC;</div>
          </div>)
      } else if (arg === this.state.sortParams && this.state.sortWay === "ASC"){
        return (                      
          <div id="sorting-triangles">
            <div id="selected-triangle">&#x25B2;</div>
            <div id="grey-triangle">&#x25BC;</div>
          </div>)        
      } else {return null}
    }



    return (
      <>
        <div className="main-user-page">
          <div className="main-user-page-2">
            <div className ="price-index-body">
            <div className="price-index-title">
             <h1 className="price-index-title-h1">
               <span id="in-last-24">In the past 24 hours</span>
               <span id="market-is">Market is {`${implication}`}&nbsp;</span> 
               <span style={colorChooser((coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /2)}>
                  {(coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /2 >= 0 ?
                  ((coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /2).toFixed(2) + "%" :
                  ((coins["bitcoin"].price_change_percentage_24h + coins["ethereum"].price_change_percentage_24h) /-2).toFixed(2) + "%"}</span>
             </h1>
              {/* <input type="text"/> */}

            </div>
              <section className="price-index-section">
              <div className="price-index">
                <table id="price-table">
                  <thead id="t2-head">
                    <tr id="t2-head-row">
                      <th className="t2-h1"> <div className="div-t2-h1"><label className="label-t2-h1">#</label></div> </th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1-h" onClick={() => this.filterCoins("name")}>Name</label>{triangleSorter("name")}</div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1-h" onClick={() => this.filterCoins("price")}>Price</label>{triangleSorter("price")}</div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1-h" onClick={() => this.filterCoins("priceChange")}>Change</label>{triangleSorter("priceChange")}</div></th>
                      <th className="t2-h1"><div className="div-t2-h1-hov"><label className="label-t2-h1-h-2" onClick={() => this.filterCoins("marketCap")}>Market Cap</label>{triangleSorter("marketCap")}</div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">&nbsp;&nbsp;&nbsp;Trade</label></div></th>
                      <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">&nbsp;&nbsp;Watch</label></div></th>
                    </tr>
                  </thead>
                  <tbody className="coin-table-body">
                    {
                      coinList.map((coin, idx) => (
                        <PriceIndexItem coin={coin}  key={idx} id={idx} userId={this.props.userId} changeWatchlist={this.props.changeWatchlist} watchlistCoins={this.props.watchlistCoins}/>
                      ))
                    }
                  </tbody>
                </table>
              </div> 
              </section>
            </div>
        </div>
      </div>
     </>
    );
  }
}

export default PriceIndex;            
                    