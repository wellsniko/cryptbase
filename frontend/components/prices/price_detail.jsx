import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TradingBoxContainer from '../trading_box/trading_box_container'
{/* <Link to={`/price/${props.coin.id}`}></Link> */}


class PriceDetail extends React.Component {
    	// constructor(props) {
		// super(props);
        //     this.props.fetchCoinPriceData(this.props.coinId)
		// }
    // componentWillMount() {
    //     // console.log(this.props)
    //     //  debugger
    //     this.props.fetchCoinPriceData(this.props.coinId); 
    // }

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchCoinPriceData(this.props.coinId);   
    }

    render() {
       
        const { coinId, coin} = this.props;
        // console.log(coin) 

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
                            Charts And Detail Page goes Here
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
                    