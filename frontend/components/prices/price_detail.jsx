import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TradingBoxContainer from '../trading_box/trading_box_container'
{/* <Link to={`/price/${props.coin.id}`}></Link> */}
import ChartDetailContainer from '../charts/chart_detail_container'
import CoinNewsItem from './coin_news_item'
import { Line } from "react-chartjs-2";

class PriceDetail extends React.Component {
    

    componentDidMount() {
       this.props.fetchCoin24hrData(this.props.coinId)
        this.props.fetchCoinPriceData(this.props.coinId).then(data=> this.props.fetchCoinNews(data.coin[0].symbol))
       
    }

    render() {
        // console.log(this.props.coin)
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
        // const priceData = []

        //     coin.prices.forEach(day => {
        //         priceData.push(day[1])
        //     })
                
        // const dateData = []

        //     coin.prices.forEach(day => {
        //         dateData.push(day[0])
        //     })
            

        //     const data = {
        //         labels: dateData,
        //         datasets: [
        //         {
        //         label: "First dataset",
        //         data: priceData,
        //         fill: true,
        //         backgroundColor: "rgba(75,192,192,0.2)",
        //         borderColor: "rgba(75,192,192,1)"
        //         }
        //     ]
        //     }
        if (!coin.news) return null

        return (
            <>
            <div className="main-user-page">
              <div className="main-user-page-2">
                <div className="price-detail-body">
                    <div className="price-detail-title">
                   <div className="detail-header">
                       <div className="detail-header-image-div">
                           <img className="lil-detail-image" src={`${coin.image}`} alt=""/>
                       </div>
                       <div className="name-and-sym-detail">
                          <h1 className="detail-name-main"> &nbsp; &nbsp;{coin.name}</h1> 
                          <h1 className="detail-sym-main">{coin.symbol}</h1>
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
                                            <div className="div-under-chart">
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
                                                    {/* {console.log(coin.total_volume)} */}
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
                                {/* <div id="coin-info box">
                                    <div id="coin-info-box-2">
                                        <div id="coin-info-box-3">
                                            <div id="coin-info-margin-bottom">
                                                <div id="coin-info-padding">


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div id="news-detail">
                                    <div id="news-detail-2">
                                        <div id="news-detail-3">
                                            <div id="news-body">
                                                <h2 id="news-h2">{coin.name}'s Top Stories</h2>
                                                <div>
                                                    {(coin.news).map((story, idx)=> (
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
                    