import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import TradingBoxContainer from '../trading_box/trading_box_container'
{/* <Link to={`/price/${props.coin.id}`}></Link> */}
import { Line } from "react-chartjs-2";

class MiniChart extends React.Component {
      componentDidMount() {
        // this.props.fetchCoins();
        console.log(this.props.fetchHistory)
        this.props.fetchHistory(this.props.coinId)
    }


    render() { 

        if (!this.props.coinId){
            return <></>
        } 
        if (!this.props.state.entities.watchlist[this.props.coinId]){
            return <> </>
        }
        const pricesData = this.props.state.entities.watchlist[this.props.coinId].prices
        // const { coinId, coin, pricesData} = this.props;
        // console.log(coin)
          
        const dateData = pricesData.map(element => new Date (element[0]-28800).toLocaleString("en-US", {hour: "numeric", minute: "numeric"}))
        const priceData = pricesData.map(element => element[1])

        const data = {
            labels: dateData,
            datasets: [{
                label: "Temporary",
                data: priceData,
                fill: false,
                backgroundColor: "rgb(22, 82, 240)",
                borderColor: "rgb(22, 82, 240)",
                pointRadius: 1
            }]
        }
    


        const options = {
            responsive: true, 
            maintainAspectRatio: false,
            ticks: {display: false},
            showScale: false,
            scales: 
                { 
                yAxes: [{ 
                    gridLines: { display: false,},
                     ticks: {display: false}
                }],
                xAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: false
                    }, 
                    ticks: {
                        autoskip: true,
                        maxTicksLimit: 6,
                        maxRotation: 0,
                        minRotation: 0
                    },
                
                }]
            }
        }
        
        return (
            <div id="holding-chart" style={{height: 340, width: 1006}}>
            <Line data={data} options={options} />
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
                    
