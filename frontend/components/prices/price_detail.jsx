import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TradingBoxContainer from '../trading_box/trading_box_container'
{/* <Link to={`/price/${props.coin.id}`}></Link> */}
import ChartDetailContainer from '../charts/chart_detail_container'
import { Line } from "react-chartjs-2";

class PriceDetail extends React.Component {
 

    componentDidMount() {
        
        this.props.fetchCoinPriceData(this.props.coinId);   
        this.props.fetchCoin24hrData(this.props.coinId)
    }

    render() {
       
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
                    
                    {/* <div id="floating-price"><h1 >{(!coin.current_price) ? coin.current_price : (coin.current_price).toLocaleString('en-US', {style: 'currency',currency: 'USD',
})}</h1></div> */}
                    
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
                                                   Temporary 
                                                </div>
                                                
                                            </div>
                                            <div className="div-under-chart-2">
                                                <div className="div-under-text-1">
                                                    <label className="chart-div-label">
                                                        Typical Hold Time
                                                    </label>
                                                </div>
                                                <span className="span-under-text">
                                                    Temporary
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
                            </div>
                            <div id="buy-box-column">
                                <TradingBoxContainer coin={coin} coinId={coinId}/>
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
                    