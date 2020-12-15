import { connect } from 'react-redux';  
import { fetchUser } from '../../actions/session_actions';
import { buyCoin, sellCoin } from '../../actions/trading_actions';
import TradingBox from './trading_box';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    // console.log(this.state)
  const userId = state.session.id;
  const buyingPower = state.entities.users[userId].wallets.usd.quantity
  const coinId = ownProps.coinId
  const current_price = ownProps.coin.current_price
  

  return ({
    buyingPower, userId, coinId, current_price, state
  });
};


const mapDispatchToProps = (dispatch) => {
  return ({
    buyCoin: (orderParams) => dispatch(buyCoin(orderParams)),
    sellCoin: (orderParams) => dispatch(sellCoin(orderParams)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(TradingBox);
