import { connect } from 'react-redux';

import PriceDetail from './price_detail';
import { fetchCoinPriceData, fetchCoin24hrData } from '../../actions/coin_actions';



const mapStateToProps = (state, ownProps) => {
    
    
  
    return {
        coinId: ownProps.match.params.coinId,
        coin: state.entities.coin
    
}};

const mapDispatchToProps = dispatch => ({
  fetchCoinPriceData: (id) => dispatch(fetchCoinPriceData(id)), //"bitcoin"
  fetchCoin24hrData: (id) => dispatch(fetchCoin24hrData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceDetail);


