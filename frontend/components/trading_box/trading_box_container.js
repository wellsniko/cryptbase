import { connect } from 'react-redux';  
import { fetchUser, removeErrors } from '../../actions/session_actions';
import { buyCoin, sellCoin } from '../../actions/trading_actions';
import TradingBox from './trading_box';

const mapStateToProps = (state, ownProps) => {
  
  const userId = state.session.id;
  const buyingPower = state.entities.users[userId].wallets.usd.quantity
  const coinId = ownProps.coinId
  const current_price = ownProps.coin.current_price
  const errors = state.errors.session
  const fromIndex = ownProps.fromIndex
  const coinBalance = state.entities.users[userId].wallets[coinId].quantity
  
  return ({
    buyingPower, userId, coinId, current_price, state, errors, fromIndex, coinBalance
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    buyCoin: (orderParams) => dispatch(buyCoin(orderParams)),
    sellCoin: (orderParams) => dispatch(sellCoin(orderParams)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    removeErrors: () => dispatch(removeErrors())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(TradingBox);
