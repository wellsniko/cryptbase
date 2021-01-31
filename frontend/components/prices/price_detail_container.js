import { connect } from 'react-redux';
import PriceDetail from './price_detail';
import { fetchCoinPriceData, fetchCoin24hrData, fetchCoinNews } from '../../actions/coin_actions';

const mapStateToProps = (state, ownProps) => ({
  coinId: ownProps.match.params.coinId,
  coin: state.entities.coin,
  symbol: state.entities.coin.symbol
})

const mapDispatchToProps = dispatch => ({
  fetchCoinPriceData: (id) => dispatch(fetchCoinPriceData(id)), 
  fetchCoin24hrData: (id) => dispatch(fetchCoin24hrData(id)),
  fetchCoinNews: (symbol) => dispatch(fetchCoinNews(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceDetail);


