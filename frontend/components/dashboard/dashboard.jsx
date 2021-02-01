import React from 'react';
import { Link } from 'react-router-dom';
import MiniChartContainer from '../charts/mini_chart_container'
import WalletIndexItem from './wallet_index_item';
import OrderIndexItem from './order_index_item';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
    // this.props.fetchBitcoinHistory("bitcoin");
    // this.props.fetchEthereumHistory("ethereum");
    // this.props.fetchRippleHistory("ripple");
    // this.props.fetchBitcoinCashHistory("bitcoin-cash");
    // this.props.fetchLitecoinHistory("litecoin");
    // this.props.fetchStellarHistory("stellar");
    
    this.props.watchlistCoins.forEach((id, idx) =>{
      this.props.fetchCoinWatchlistData(id)
    })
    
  }

  render() {
    if (!this.props.currentUser) {
      return <> </> 
    } 
    if (!this.props.coins){
      return null
    }

    const { coins, currentUser, ordersArray} = this.props;
    const wallets = currentUser.wallets
    
    let walletArray = []
    let totalBalance = 0

    Object.values(wallets).forEach((wallet, idx) =>{
      if (coins[wallet.coin_id]){ 
        walletArray.push( { coin_id :coins[wallet.coin_id].id, orders: wallet.orders, value: ((coins[wallet.coin_id].current_price) * wallet.quantity), quantity: wallet.quantity });
        totalBalance = totalBalance + Number((coins[wallet.coin_id].current_price) * wallet.quantity)
      }
      if (wallet.coin_id === "usd") {
        walletArray.push( { coin_id : "usd", value: Number(wallet.quantity), quantity: wallet.quantity, orders: [] });
        totalBalance = totalBalance + Number(wallet.quantity)
      }
      
    })

    const sortedWalletArray = walletArray.sort((a, b) => (a.value < b.value) ? 1 : (a.value === b.value) ? ((a.value < b.value) ? 1 : -1) : -1 )

    return (
        <div className="main-user-page">
          <div className="main-user-page-2">
            <div className="portfolio-body">
              <div className="portfolio-left-down-1">
                  <div className="portfolio-left-chart">
                    <div className="chart-box">
                      <div className="watchlist-header">
                        <h2 className="watchlist-h2">Watchlist</h2>
                      </div>

                      <div className="watchlist-body">
                        <div className="row-div">
                          <MiniChartContainer coinId={this.props.watchlistCoins[0]} color={"rgb(193, 125, 38)"}/>
                          <MiniChartContainer coinId={this.props.watchlistCoins[1]} color={"rgb(140,174,85)"}/>
                        </div>

                        <div className="row-div"> 
                          <MiniChartContainer coinId={this.props.watchlistCoins[2]} color={"rgb(22, 82, 240)"}/>
                          <MiniChartContainer coinId={this.props.watchlistCoins[3]} color={"rgb(130, 130, 130)"}/>
                        </div>

                        <div className="row-div">
                          <MiniChartContainer coinId={this.props.watchlistCoins[4]} color={"rgb(0,0,0)"}/>
                          <MiniChartContainer coinId={this.props.watchlistCoins[5]} color={"rgb(0,0,0)"}/>
                        </div>
                      </div>

                      <div className="watchlist-bottom">
                        <Link to={"/prices"} className="discover-more-assets" style={{textDecoration : "none"}}>Discover More Assets</Link>
                      </div>
                    </div>
                  </div>
              </div>

                  <div className="portfolio-body-2">
                    <div className="portfolio-body-left">
                      <div className="portfolio-left-down-2">
                        <div className="your-assets-1">
                          <div className="your-assets-top">
                            <div className="wallets-header-div">
                              <h2 className="your-assets-header">Your Assets:</h2>
                              <h2 className="your-assets-header-2">{totalBalance.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</h2>
                            </div>
                          <table id="price-table">
                                <thead id="t2-head">
                                  <tr id="t2-head-row">
                                    <th className="t2-h1"> <div className="div-t2-h1"><label className="label-t2-h1">Asset</label></div> </th>
                                    <th className="header-wallet-value"><div className="div-t2-h1"><label className="label-t2-h1">Balance</label></div></th>
                                    <th className="index-link-r-l"><div className="div-t2-new-h"><label className="label-t2-h1">Orders</label></div></th>
                                  </tr>
                                </thead>

                                <tbody className="coin-table-body">  

                                  {sortedWalletArray.map((wallet, idx) => {
                                    
                                    if (wallet.coin_id === "usd"){
                                      return (
                                        <tr key={`${idx}`} className="price-index-row">

                                          <td className="t2-r1-usd">                    
                                                <div className="div-t2-usd" > 
                                                  <h3 className="index-image-2">$</h3>
                                                  <label style={{color: `black`}}>&nbsp;&nbsp;&nbsp;US Dollar&nbsp;&nbsp;</label>
                                                </div>
                                          </td>

                                          <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1">
                                            <div className="div-t2-r1" > 
                                                  <label style={{color: `black`}}>{(wallets.usd.quantity * 1).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}&nbsp;&nbsp;</label>
                                                  <label style={{color: `rgba(17, 51, 83, 0.6)`}}>&nbsp;USD</label>
                                                </div>
                                              </label>
                                            </div> 
                                          </td>

                                          <td className="t2-r1">
                                              <div className="div-t2-new">
                                                  <label className="label-t2-r1" >
                                                  </label>
                                              </div> 
                                          </td>

                                        </tr>
                                      )
                                    } else {
                                      return (
                                      <WalletIndexItem wallet={wallet} key={idx} id={idx} value={wallet.value} coins={coins} coin={coins[wallet.coin_id]}/>
                                      )
                                    }
                                  })}

                            </tbody>
                          </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-body-right">
                  <div className="order-list"> 
                    <div className="order-header-div">
                      <h3 className="order-header-h3">Recent Transactions</h3>
                    </div>
                    <div className="order-body-div-1">
                      <div className="order-body-div-2">
                        <div>

                            {ordersArray.map((order, idx) => {  
                              return (
                                <OrderIndexItem order={order} key={idx} coin={coins[order.coin_id]}/>
                              )
                            })}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
    )
  }
}

export default Dashboard;