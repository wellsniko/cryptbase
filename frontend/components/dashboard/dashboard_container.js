import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCoins, fetchCoinWatchlistData} from '../../actions/coin_actions';

const mapStateToProps = state => ({
  coins: state.entities.coins,
  currentUser: state.entities.users[state.session.id],
  ordersArray: state.entities.users[state.session.id].orders,
  watchlist: state.entities.watchlist,
  watchlistCoins: state.entities.users[state.session.id].watchlist
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
  fetchCoinWatchlistData: (id) => dispatch(fetchCoinWatchlistData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


