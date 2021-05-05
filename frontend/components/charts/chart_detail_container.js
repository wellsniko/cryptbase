import { connect } from 'react-redux';

import ChartDetail from './chart_detail';
import { fetchCoinPriceData, fetchCoinChartData } from '../../actions/coin_actions';



const mapStateToProps = (state, ownProps) => ({
        coin: ownProps.coin,
        pricesData: ownProps.coin.prices,
        coinId: ownProps.coinId,
});

const mapDispatchToProps = dispatch => ({
  fetchCoinPriceData: (id) => dispatch(fetchCoinPriceData(id)),
  fetchCoinChartData: (id, days) => dispatch(fetchCoinChartData(id, days))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartDetail);


