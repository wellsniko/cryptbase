import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCoins,fetchBitcoinHistory, fetchEthereumHistory, fetchRippleHistory, fetchBitcoinCashHistory, fetchLitecoinHistory, fetchStellarHistory} from '../../actions/coin_actions';

const mapStateToProps = state => ({
  coins: state.entities.coins,
  currentUser: state.entities.users[state.session.id],
  ordersArray: state.entities.users[state.session.id].orders,
  watchlist: state.entities.watchlist
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
  fetchBitcoinHistory: (id) => dispatch(fetchBitcoinHistory(id)),
  fetchEthereumHistory: (id) => dispatch(fetchEthereumHistory(id)),
  fetchRippleHistory: (id) => dispatch(fetchRippleHistory(id)),
  fetchBitcoinCashHistory: (id) => dispatch(fetchBitcoinCashHistory(id)),
  fetchLitecoinHistory: (id) => dispatch(fetchLitecoinHistory(id)),
  fetchStellarHistory: (id) => dispatch(fetchStellarHistory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


