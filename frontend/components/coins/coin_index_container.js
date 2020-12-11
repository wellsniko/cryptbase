import { connect } from 'react-redux';

import CoinIndex from './coin_index';
import { fetchCoins } from '../../actions/coin_actions';



const mapStateToProps = state => ({
  coins: Object.values(state.entities.coins)
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinIndex);


