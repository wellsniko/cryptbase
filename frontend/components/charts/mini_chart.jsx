import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
// import TradingBoxContainer from '../trading_box/trading_box_container'
{/* <Link to={`/price/${props.coin.id}`}></Link> */}
import { Line } from "react-chartjs-2";

class MiniChart extends React.Component {
      componentDidMount() {
        this.props.fetchCoins();
        
        // this.props.fetchHistory(this.props.coinId)
    }


    render() { 
        // debugger

        
        if (typeof this.props.coinId === 'undefined') {
           return <> </>
        } 
        if (typeof this.props.state.entities.watchlist[this.props.coinId] === 'undefined'){
            return <> </>
        }
        if (typeof this.props.state === 'undefined') {
            return <> </>
        }
        if (!this.props.coins) {
           return <> </>
        }
        if (Object.values(this.props.coins).length < 28) {
           return <> </>
        }
        // if (typeof this.props.coins === 'object') {
        //    return <> </>
        // }
        
        const pricesData = this.props.state.entities.watchlist[this.props.coinId].prices
        // const { coinId, coin, pricesData} = this.props;
        // console.log(coin)
        // console.log(this.props.coins) 
        const coin = this.props.coins.find(o=> o.id === this.props.coinId)
          
        const dateData = pricesData.map(element => new Date (element[0]-28800).toLocaleString("en-US", {hour: "numeric", minute: "numeric"}))
        const priceData = pricesData.map(element => element[1])
        // const coinImage = <div><img src={`${coin.image}`}/></div>
        
        // coin.name + coin.current_price

        const data = {
            labels: dateData,
            datasets: [{
                label: coin.name,
                data: priceData,
                fill: false,
                backgroundColor: this.props.color,
                borderColor: this.props.color,
                pointRadius: 1
            }]
        }
    
        const options = {
            responsive: true, 
            maintainAspectRatio: false,
            ticks: {display: false},
            showScale: false,
            legend: {display: false},
            title: {display: false},
            scales: 
                { 
                yAxes: [{ 
                    gridLines: { display: false,},
                     ticks: {display: false}
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: true,
                        drawOnChartArea: false
                    }, 
                    ticks: {
                        autoskip: true,
                        display: false
                    }, 
                }]
            }
        }
        
        const colorChooser = (percentage)=> {
            return percentage >= 0 ? {color:`rgb(5, 177, 105)`} : {color:`rgb(223, 95, 103)`};
        }

        return (
            
            <div>
                <div className="div-inside-mini-chart">
                    <div className="inside-mini-box">
                    <div className="mini-coin-name">
                        <img src={`${coin.image}`} className="mini-chart-image"/>
                    
                        &nbsp;{coin.name}
                    </div>
                    <div className="mini-coin-price">
                        {(coin.current_price).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}
                    </div>
                </div> 
                <div className="inside-mini-box-2">
                    <label className="hr-24-mini">24hr</label> 
                       <label className="mini-change-percentage" style={colorChooser(coin.price_change_percentage_24h)}> {coin.price_change_percentage_24h>= 0 ? "+" + (coin.price_change_percentage_24h).toFixed(2) + "%" : (coin.price_change_percentage_24h).toFixed(2) + "%"}</label>
                </div>
                </div>

                <div className="mini-holding-chart" style={{height: 155}}>
                <Line data={data} options={options} />
            </div>
</div>
            // <div>
            //     we made it
            // </div>
         );
    }
}

export default MiniChart;    


        
        // return (
        //     <>
        //     <Line id="chart-component" data = {data} options={{ 
        //         responsive: false, 
        //         maintainAspectRatio: false,
        //         showScale: false, 
        //         ticks: {display: false},
        //         scales: {
        //             yAxes: [{
        //             gridLines: {
        //                 display: false,
        //             }, ticks: {display: false}
        //             }],
        //             xAxes: [{
        //                 gridLines: { 
        //                     display: false,
        //                 }, ticks: {display: false}
        //                 }]
        //         },
                
        //         }} style={{height: "362"}}/>
        //                     </>
        //                 );
        //             }
        //         }

// export default ChartDetail;            
                    
