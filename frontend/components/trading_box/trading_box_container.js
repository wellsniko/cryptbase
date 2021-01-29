import { connect } from 'react-redux';  
import { fetchUser, removeErrors } from '../../actions/session_actions';
import { buyCoin, sellCoin } from '../../actions/trading_actions';
import TradingBox from './trading_box';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  
  const userId = state.session.id;
  const buyingPower = state.entities.users[userId].wallets.usd.quantity
  const coinId = ownProps.coinId
  const current_price = ownProps.coin.current_price
  const errors = state.errors.session
  

  return ({
    buyingPower, userId, coinId, current_price, state, errors
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
