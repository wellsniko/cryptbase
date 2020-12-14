import { connect } from 'react-redux';  

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
    buyingPower, userId, coinId, current_price
  });
};


const mapDispatchToProps = (dispatch) => {
  return ({
    buyCoin: (orderParams) => dispatch(buyCoin(orderParams)),
    sellCoin: (orderParams) => dispatch(sellCoin(orderParams))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(TradingBox);
