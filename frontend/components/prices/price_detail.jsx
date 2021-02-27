import React from 'react';
import TradingBoxContainer from '../trading_box/trading_box_container'
import ChartDetailContainer from '../charts/chart_detail_container'
import CoinNewsItem from './coin_news_item'
import OrderIndexItem from '../dashboard/order_index_item'

class PriceDetail extends React.Component {
    constructor(props) {
        super(props)
      this.watchlistFunctionAdd = this.watchlistFunctionAdd.bind(this)
      this.watchlistFunctionRemove = this.watchlistFunctionRemove.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchCoinPriceData(this.props.coinId).then(data=> this.props.fetchCoinNews(data.coin[0].symbol))
        this.props.fetchCoin24hrData(this.props.coinId)  
        window.scrollTo(0, 0)

       
    }


    watchlistFunctionAdd() {
      var possibleWatchlist = this.props.watchlist.coins.slice()
      possibleWatchlist.unshift(this.props.coin.id)

      const watchlistParams = {
          id: this.props.watchlist.id,
          user_id: this.props.userId,
          coins: possibleWatchlist
      }

      this.props.changeWatchlist(watchlistParams)

    }

    watchlistFunctionRemove() {
      var possibleWatchlist = this.props.watchlist.coins.slice()
      

      var filteredWatchlist = possibleWatchlist.filter(coinId => (
        coinId !== this.props.coin.id
      ));

      const watchlistParams = {
          id: this.props.watchlist.id,
          user_id: this.props.userId,
          coins: filteredWatchlist
      }

      this.props.changeWatchlist(watchlistParams)

    }




    render() {
         if (!this.props.coin) return null
        const { coinId, coin} = this.props;
        
        const normalNumConverter = (num) => {

            return Math.abs(Number(num)) >= 1.0e+12
            ? (Math.abs(Number(num)) / 1.0e+12) + "T"
            : Math.abs(Number(num)) >= 1.0e+9
            ? (Math.abs(Number(num)) / 1.0e+9).toFixed(1) + "B"
            : Math.abs(Number(num)) >= 1.0e+6
            ? (Math.abs(Number(num)) / 1.0e+6).toFixed(1) + "M"
            : Math.abs(Number(num)) >= 1.0e+3
            ? (Math.abs(Number(num)) / 1.0e+3).toFixed(1) + "K"
            : ""
        }

        const numConverter = (num) => {

            return Math.abs(Number(num)) >= 1.0e+12
            ? "$" + (Math.abs(Number(num)) / 1.0e+12) + "T"
            : Math.abs(Number(num)) >= 1.0e+9
            ? "$" +(Math.abs(Number(num)) / 1.0e+9).toFixed(1) + "B"
            : Math.abs(Number(num)) >= 1.0e+6
            ? "$" +(Math.abs(Number(num)) / 1.0e+6).toFixed(1) + "M"
            : Math.abs(Number(num)) >= 1.0e+3
            ? "$" +(Math.abs(Number(num)) / 1.0e+3).toFixed(1) + "K"
            : ""
        }

        let ordersArray = this.props.ordersArray.filter(order => order.coin_id === coin.id)



        return (
            <>
            <div className="main-user-page">
              <div className="main-user-page-2">
                <div className="price-detail-body">
                    <div className="price-detail-title">
                   <div className="detail-header">
                       <div className="header-and-image-flex">
                        <div className="detail-header-image-div">
                            {!coin.image ? null : <img className="lil-detail-image" src={`${coin.image}`} alt=""/>}
                        </div>
                        <div className="name-and-sym-detail">
                            <h1 className="detail-name-main"> &nbsp; &nbsp;{coin.name}</h1> 
                            <h1 className="detail-sym-main">{coin.symbol}</h1>
                        </div>
                        </div>
                        <div className="noclaass">


                            {this.props.watchlist.coins.includes(this.props.coinId) ? 
                            
                        
                            <div type="light" onClick={this.watchlistFunctionRemove} className="two-stars-detail"><span className="detail-watchlist-button">
                                <svg fill="none" height="23" viewBox="0 0 24 23" width="24" filled="filled" className="star-here-filled">
                                    <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z" stroke="#becada">
                                    </path>
                                </svg>
                                <span className="span-wat-ch">Watchlist</span></span>
                            </div> :
                            
                            <div onClick={this.watchlistFunctionAdd} type="light" className="two-stars-detail"><span className="detail-watchlist-button">
                                <svg fill="none" height="23" viewBox="0 0 24 23" width="24" filled="" className="watchlist-add-here">
                                    <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z" stroke="#becada">
                                    </path>
                                </svg>
                                <span className="span-wat-ch">Add to Watchlist</span></span>
                            </div>
                            
                            }
                        </div>
                        
                    </div>
                    <div className="overview">Overview</div>
                    





                    
                </div>
                    <div className="detail-main-section">
                        <div className="detail-page-separate">
                            <div className="chart-column">
                              <div className="chart-and-under">
                                <div id="main-chart">
                                <ChartDetailContainer coin={coin}/>
                                </div>
                            
                                <div className="under-chart">
                                    <div className="under-under-chart">
                                        <div className="under-under-under-chart">
                                            <div className="div-under-chart">
                                                <div className="div-under-text-1">
                                                    <label className="chart-div-label">
                                                        Market Cap
                                                    </label>
                                                </div>
                                                <span className="span-under-text">
                                                    {numConverter(coin.market_cap)}
                                                </span>
                                            </div>
                                            <div className="div-under-chart">
                                                <div className="div-under-text-1">
                                                    <label className="chart-div-label">
                                                        Volume (24 hours)

                                                    </label>
                                                </div>
                                                <span className="span-under-text">
                                                    {numConverter(coin.total_volume)}
                                                </span>
                                            </div>
                                            <div className="div-under-chart">
                                                <div className="div-under-text-1">
                                                    <label className="chart-div-label">
                                                        Circulating Supply
                                                    </label>
                                                </div>
                                                <span className="span-under-text-r">
                                                    {normalNumConverter(coin.circulating_supply)} &nbsp;{coin.symbol}
                                                </span>
                                            </div>
                                            <div className="div-under-chart">
                                                <div className="div-under-text-1">
                                                    <label className="chart-div-label">
                                                        Popularity on Cryptbase
                                                    </label>
                                                </div>
                                                <span className="span-under-text">
                                                    {coin.market_cap_rank} 
                                                </span>
                                            </div>
                                            <div className="div-under-chart-12">
                                                <div className="div-under-text-1">
                                                    <label className="chart-div-label">
                                                        Trading Activity
                                                    </label>
                                                </div>
                                                <div className="div-under-text-2">
                                                   {coin.price_change_percentage_24h /100 < .03 && coin.price_change_percentage_24h /100 > -.03 ? coin.price_change_percentage_24h /100 > 0 ? 
                                                   (coin.price_change_percentage_24h* 30).toFixed(0) + "% Hold" : (coin.price_change_percentage_24h * -30).toFixed(0) + "% Hold" : 
                                                   coin.price_change_percentage_24h /100 > 0 ? coin.price_change_percentage_24h /100 * 11 > 1 ? "70% Sell" : 
                                                   (coin.price_change_percentage_24h* 11).toFixed(0) + "% Sell" : coin.price_change_percentage_24h /100 * 11 < 1 ? "60% Buy" : (coin.price_change_percentage_24h * 11).toFixed(0) + "% Buy"}
                                                </div>
                                                
                                            </div>
                                            <div className="div-under-chart-2">
                                                <div className="div-under-text-1">
                                                    <label className="chart-div-label">
                                                        Typical Hold Time
                                                    </label>
                                                </div>
                                                <span className="span-under-text">
                                                    {coin.total_volume? (coin.circulating_supply * 3).toString().slice(0,2) : null} Days
                                                </span>
                                                
                                            </div>
                                            <div className="div-under-chart">
                                                <div className="div-under-text-1">
                                                    <label className="chart-div-label">
                                                        
                                                    </label>
                                                </div>
                                                <span className="span-under-text">
                                                    
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div id="news-detail">
                                    <div id="news-detail-2">
                                        <div id="news-detail-3">
                                            <div id="news-body">
                                                <h2 id="news-h2">{coin.name}'s Top Stories</h2>
                                                <div>
                                                    { (!coin.news) ? <div style={{paddingBottom: "20px"}}> {setTimeout(() => "Sorry, I'm temporarily limited on this API call. There's probably more traffic than usual.", 2000)}</div> : (coin.news).map((story, idx)=> (
                                                        <CoinNewsItem story={story} key={idx}/>
                                                    ))}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="buy-box-column">
                                <TradingBoxContainer fromIndex={false} coin={coin} coinId={coinId}/>

                                                <div className="portfolio-body-right">
                                            <div className="order-list"> 
                                                <div className="order-header-div">
                                                <h3 className="order-header-h3">Recent {coin.name} Transactions</h3>
                                                </div>
                                                <div className="order-body-div-1">
                                                <div className="order-body-div-2">
                                                    <div>
                                                        { ordersArray.length < 1 ? 
                                                            <div className="order-row-item">
                                                            <div className="order-image-div">
                                                                
                                                            </div>
                                                            <div>
                                                                <h4 className="order-h4">No orders</h4>
                                                            </div>
                                                            {/* {Number(order.quantity).toFixed(4)}&nbsp;&nbsp;&nbsp;&nbsp;{order.coin_id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{new Date (order.created_at).toLocaleString("en-US", {day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric"})} */}
                                                            </div>
                                                        
                                                        
                                                        
                                                        : 
                                                        ordersArray.map((order, idx) => {  
                                                        return (
                                                            <OrderIndexItem order={order} key={idx} coin={coin}/>
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
                </div>
            </div>
            </>
        );
    }
}

export default PriceDetail;            
                    