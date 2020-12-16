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
                   
                    <h1>{coin.name}</h1>
                    <h1>{coin.symbol}</h1>
                    <h1>{coin.price}</h1>
                    
                </div>
                    <div className="detail-main-section">
                        <div className="detail-page-separate">
                            <div id="main-chart">
                            <ChartDetailContainer coin={coin}/>
                            </div>
                            <div id="detail-buy-box">
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
                    