import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
            <div className="price-detail-page">
                
                <div className="price-detail-title">
                   
                    <h1>{coin.name}</h1>
                    <h1>{coin.symbol}</h1>
                </div>
                    <section className="detail-main-section">
                        <div id="main-chart">
                        Charts And Detail Page goes Here
                        </div>
                        <div id="detail-buy-box">
                            Buy Box
                        </div>
                    </section>
               
            </div>
        );
    }
}

export default PriceDetail;            
                    