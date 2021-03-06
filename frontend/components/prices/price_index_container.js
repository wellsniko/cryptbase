import { connect } from 'react-redux';
import PriceIndex from './price_index';
import { fetchCoins} from '../../actions/coin_actions';
import {changeWatchlist} from '../../actions/session_actions'

const mapStateToProps = state => ({
  coins: state.entities.coins,
  watchlist: state.entities.users[state.session.id].watchlist,
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
  changeWatchlist: (watchlistParams) => dispatch(changeWatchlist(watchlistParams))
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceIndex);


