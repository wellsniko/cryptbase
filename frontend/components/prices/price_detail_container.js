import { connect } from 'react-redux';

import PriceDetail from './price_detail';
import { fetchCoinPriceData } from '../../actions/coin_actions';



const mapStateToProps = (state, ownProps) => {
    
    
    console.log(ownProps)
    // console.log(fetchCoinPriceData(ownProps.match.params.coinId))
    console.log(state.entities)
    return {
        coinId: ownProps.match.params.coinId,
        coin: state.entities.coin
        // coin: dispatch(fetchCoinPriceData(ownProps.match.params.coinId))
        // coin: state.entities.coins.coinId
}};

const mapDispatchToProps = dispatch => ({
  fetchCoinPriceData: (id) => dispatch(fetchCoinPriceData(id)), //"bitcoin"
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceDetail);


