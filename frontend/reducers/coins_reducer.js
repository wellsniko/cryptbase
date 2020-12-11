import {RECEIVE_COINS, RECEIVE_COIN} from '../actions/coin_actions';


const CoinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_COINS:
      return Object.assign({}, oldState, action.coins)
    case RECEIVE_COIN:
      return Object.assign({}, oldState, { [action.coin.id]: action.coin })
    default:
      return oldState;
  }
};

export default CoinsReducer;
