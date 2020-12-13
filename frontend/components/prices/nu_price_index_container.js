import { connect } from 'react-redux';

import NuPriceIndex from './nu_price_index';
import { fetchCoins } from '../../actions/coin_actions';



const mapStateToProps = state => ({
  coins: Object.values(state.entities.coins)
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NuPriceIndex);


