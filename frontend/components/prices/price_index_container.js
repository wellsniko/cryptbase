import { connect } from 'react-redux';
import PriceIndex from './price_index';
import { fetchCoins } from '../../actions/coin_actions';

const mapStateToProps = state => ({
  coins: state.entities.coins,
  watchlistCoins: state.entities.users[state.session.id].watchlist
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceIndex);


