import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import TradingBoxContainer from '../trading_box/trading_box_container'
{/* <Link to={`/price/${props.coin.id}`}></Link> */}
import { Line } from "react-chartjs-2";

class ChartDetail extends React.Component {
    	// constructor(props) {
		// super(props);
        //     this.props.fetchCoinPriceData(this.props.coinId)
		// }
    // componentWillMount() {
    //     // console.log(this.props)
    //     //  debugger
    //     this.props.fetchCoinPriceData(this.props.coinId); 
    // }

    // componentDidMount() {
    //     // console.log(this.props)
            
    //         const priceData = []

    //         this.props.pricesData.forEach(day => {
    //             priceData.push(day[1])
    //         })
                
    //         const dateData = []

    //         this.props.pricesData.forEach(day => {
    //             dateData.push(day[0])
    //         })
            

    //         const data = {
    //             labels: dateData,
    //             datasets: [
    //             {
    //             label: "First dataset",
    //             data: priceData,
    //             fill: true,
    //             backgroundColor: "rgba(75,192,192,0.2)",
    //             borderColor: "rgba(75,192,192,1)"
    //             }
    //         ]
    //         }
    // }
    

    render() { 

        if (!this.props.pricesData){
            return <></>
        } 
        if (!this.props.coin){
            return <></>
        } 
        if (!this.props.coin.current_price) {
            return <> </>
        }
        const { coinId, coin, pricesData} = this.props;
        // console.log(coin)  
        const dateData = pricesData.map(element => new Date (element[0]-28800).toLocaleString("en-US", {hour: "numeric", minute: "numeric"}))
        const priceData = pricesData.map(element => element[1])

        const data = {
            labels: dateData,
            datasets: [{
                label: coin.name,
                data: priceData,
                fill: false,
                backgroundColor: "rgb(22, 82, 240)",
                borderColor: "rgb(22, 82, 240)",
                pointRadius: 1,
                lineRadius: 2,
            }]
        }
    
        const colorChooser = (percentage)=> {
            return percentage >= 0 ? {color:`rgb(5, 177, 105)`} : {color:`rgb(223, 95, 103)`};
        }


        const options = {
            responsive: true, 
            maintainAspectRatio: false,
            ticks: {display: false},
            showScale: false,
            legend: {display: false},
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
                <div>
               <div className="div-inside-mini-chart-2">
                    <div className="inside-mini-box-1-1">
                   
                    <div className="mini-coin-price-2">
                        {(coin.current_price).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}
                        
                    </div>
                     <label className="mini-change-percentage-2" style={colorChooser(coin.price_change_percentage_24h)}> {coin.price_change_percentage_24h>= 0 ? "+" + (coin.price_change_percentage_24h).toFixed(2) + "%" : (coin.price_change_percentage_24h).toFixed(2) + "%"}</label>
                </div> 
                <div className="inside-mini-box-2">
                    <label className="hr-24-mini-2">24hr</label> <br/>
                      
                </div>
                </div>

            <div id="holding-chart" style={{height: 285, width: 1006}}>
            <Line data={data} options={options} />
            </div>
            </div>
         );
    }
}

export default ChartDetail;    


        
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
                    
