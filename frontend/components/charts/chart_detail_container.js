import { connect } from 'react-redux';

import ChartDetail from './chart_detail';
import { fetchCoinPriceData, fetchCoin24hrData } from '../../actions/coin_actions';



const mapStateToProps = (state, ownProps) => ({
        coin: ownProps.coin,
        pricesData: ownProps.coin.prices,
        coinId: ownProps.coin.id,
});

const mapDispatchToProps = dispatch => ({
  fetchCoinPriceData: (id) => dispatch(fetchCoinPriceData(id)), //"bitcoin"
  fetchCoin24hrData: (id) => dispatch(fetchCoin24hrData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartDetail);


