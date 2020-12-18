import { connect } from 'react-redux';

import MiniChart from './mini_chart';
import { fetchCoins,fetchBitcoinHistory, fetchLitecoinHistory, fetchEthereumHistory } from '../../actions/coin_actions';



const mapStateToProps = (state, ownProps) => ({
//   coins: Object.values(state.entities.coins),
//   state: state,
//   currentUser: state.entities.users[state.session.id],
//   ordersArray: state.entities.users[state.session.id].orders,
    // coin: state.entities.coins.find(o=> o.id === ownProps.coinId),
    coinId: ownProps.coinId,
    watchlist: state.entities.watchlist,
    fetchHistory: ownProps.fetchHistory,
    color: ownProps.color,
    // priceData: state.entities.watchlist[ownProps.coinId].prices
    state: state,
    coins: state.entities.coins
});

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
//   fetchBitcoinHistory: (id) => dispatch(fetchBitcoinHistory(id)),
//   fetchEthereumHistory: (id) => dispatch(fetchEthereumHistory(id)),
//   fetchLitecoinHistory: (id) => dispatch(fetchLitecoinHistory(id))
    // fetchHistory: () => dispatch(ownProps.fetchHistory)
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniChart);


