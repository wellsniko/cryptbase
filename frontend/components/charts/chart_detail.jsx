import React from 'react';
import { Line } from "react-chartjs-2";

class ChartDetail extends React.Component {
        constructor(props) {
        super(props)
        this.state = {
            chartTime: "24H"
        }
        this.updateChart = this.updateChart.bind(this)
    }

    updateChart(time){
        let days 
        time === "24H" ? days = 1 : time === "1W" ? days = 7 : time === "1M" ? days = 30 : time === "1Y" ? days = 365 : time === "ALL" ? days = "max" : days = 1
        this.props.fetchCoinChartData(this.props.coinId, days)
        this.setState({chartTime: time})
    }

    componentDidMount(){
        this.props.fetchCoinChartData(this.props.coinId, 1)  
    }

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
                <div className="inside-mini-box-3">
                    <label style={this.state.chartTime==="24H" ? {color:"rgb(22, 82, 240)"} : {}} className="hr-24-mini-2" onClick={() => this.updateChart("24H")}>24H</label> 
                    <label style={this.state.chartTime==="1W" ? {color:"rgb(22, 82, 240)"} : {}} className="hr-24-mini-2" onClick={() => this.updateChart("1W")}>1W</label> 
                    <label style={this.state.chartTime==="1M" ? {color:"rgb(22, 82, 240)"} : {}} className="hr-24-mini-2" onClick={() => this.updateChart("1M")}>1M</label> 
                    <label style={this.state.chartTime==="1Y" ? {color:"rgb(22, 82, 240)"} : {}} className="hr-24-mini-2" onClick={() => this.updateChart("1Y")}>1Y</label> 
                    <label style={this.state.chartTime==="ALL" ? {color:"rgb(22, 82, 240)"} : {}} className="hr-24-mini-2" onClick={() => this.updateChart("ALL")}>ALL</label> 
                      
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
