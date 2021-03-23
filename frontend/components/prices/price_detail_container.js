import { connect } from 'react-redux';
import PriceDetail from './price_detail';
import { fetchCoinPriceData, fetchCoinChartData, fetchCoinNews } from '../../actions/coin_actions';
import {changeWatchlist} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  coinId: ownProps.match.params.coinId,
  coin: state.entities.coin,
  symbol: state.entities.coin.symbol,
  ordersArray: state.entities.users[state.session.id].orders,
  watchlist: state.entities.users[state.session.id].watchlist,
  userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
  fetchCoinPriceData: (id) => dispatch(fetchCoinPriceData(id)), 
  fetchCoinChartData: (id, days) => dispatch(fetchCoinChartData(id, days)),
  fetchCoinNews: (symbol) => dispatch(fetchCoinNews(symbol)),
  changeWatchlist: (watchlistParams) => dispatch(changeWatchlist(watchlistParams))

});

export default connect(mapStateToProps, mapDispatchToProps)(PriceDetail);


