import {RECEIVE_COINS} from '../actions/coin_actions';

// RECEIVE_COIN
const CoinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  if (action.type === RECEIVE_COINS) {

      return Object.values(action.coins)
      

  } else {
    return oldState;
  }
    //   return Object.values(newCoins).map(coin => (
    //     {[coin.id]:coin}
    // ))
    // case RECEIVE_COIN:
 
    //   return Object.assign({}, oldState, action.coin )
    // default:
    //   return oldState;

};

export default CoinsReducer;
 

