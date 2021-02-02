import React from 'react';
import { Line } from "react-chartjs-2";

class ChartDetail extends React.Component {

    render() { 

        if (!this.props.pricesData || !this.props.coin || !this.props.coin.current_price){
            return null
        } 

        const { coinId, coin, pricesData} = this.props;
        const dateData = pricesData.map(element => new Date (element[0]-28800).toLocaleString("en-US", {hour: "numeric", minute: "numeric"}))
        
        let priceData 
        pricesData[0][1] < 1 ? priceData = pricesData.map(element => element[1].toFixed(4)) : priceData = pricesData.map(element => element[1].toFixed(2))

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
            tooltips: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(t, d) {
                    var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
                    return yLabel;
                    }
                }
            },
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

            <div id="holding-chart" style={{height: 285}}>
            <Line data={data} options={options} />
            </div>
            </div>
         );
    }
}

export default ChartDetail;    
