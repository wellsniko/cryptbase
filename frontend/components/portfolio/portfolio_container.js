import { connect } from 'react-redux';

import Portfolio from './porfolio';
import { fetchCoins } from '../../actions/coin_actions';
import Portfolio from './porfolio';



const mapStateToProps = state => ({
  coins: Object.values(state.entities.coins),
  state: state,
  currentUser: state.entities.users[state.session.id],
  ordersArray: state.entities.users[state.session.id].orders,
  fourCoins: ["bitcoin", "ethereum", "ripple", "bitcoin-cash", "litecoin", "stellar"]
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);


