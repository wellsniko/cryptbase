import { connect } from 'react-redux';

import Dashboard from './dashboard';
import { fetchCoins } from '../../actions/coin_actions';



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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


