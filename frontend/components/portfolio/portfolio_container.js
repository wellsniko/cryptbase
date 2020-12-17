import { connect } from 'react-redux';

import Portfolio from './portfolio';
import { fetchCoins,fetchBitcoinHistory, fetchLitecoinHistory, fetchEthereumHistory } from '../../actions/coin_actions';



const mapStateToProps = state => ({
  coins: Object.values(state.entities.coins),
  state: state,
  currentUser: state.entities.users[state.session.id],
  ordersArray: state.entities.users[state.session.id].orders,
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
  fetchBitcoinHistory: (id) => dispatch(fetchBitcoinHistory(id)),
  fetchEthereumHistory: (id) => dispatch(fetchEthereumHistory(id)),
  fetchLitecoinHistory: (id) => dispatch(fetchLitecoinHistory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);


