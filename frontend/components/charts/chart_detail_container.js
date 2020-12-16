import { connect } from 'react-redux';

import ChartDetail from './chart_detail';
import { fetchCoinPriceData, fetchCoin24hrData } from '../../actions/coin_actions';



const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
       


    return {
        // coinId: ownProps.match.params.coinId,
        coin: ownProps.coin,
        pricesData: ownProps.coin.prices,
        coinId: ownProps.coin.id,

        
        // coin: dispatch(fetchCoinPriceData(ownProps.match.params.coinId))
        // coin: state.entities.coins.coinId
}};

const mapDispatchToProps = dispatch => ({
  fetchCoinPriceData: (id) => dispatch(fetchCoinPriceData(id)), //"bitcoin"
  fetchCoin24hrData: (id) => dispatch(fetchCoin24hrData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartDetail);


