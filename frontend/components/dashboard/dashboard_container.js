import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCoins, fetchCoinWatchlistData} from '../../actions/coin_actions';

const mapStateToProps = state => ({
  coins: state.entities.coins,
  currentUser: state.entities.users[state.session.id],
  ordersArray: state.entities.users[state.session.id].orders,
  watchlist: state.entities.watchlist,
  watchlistCoins: state.entities.users[state.session.id].watchlist.coins
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
  // fetchBitcoinHistory: (id) => dispatch(fetchBitcoinHistory(id)),
  // fetchEthereumHistory: (id) => dispatch(fetchEthereumHistory(id)),
  // fetchRippleHistory: (id) => dispatch(fetchRippleHistory(id)),
  // fetchBitcoinCashHistory: (id) => dispatch(fetchBitcoinCashHistory(id)),
  // fetchLitecoinHistory: (id) => dispatch(fetchLitecoinHistory(id)),
  // fetchStellarHistory: (id) => dispatch(fetchStellarHistory(id)),
  fetchCoinWatchlistData: (id) => dispatch(fetchCoinWatchlistData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


