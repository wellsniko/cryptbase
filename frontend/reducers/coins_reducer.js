import {RECEIVE_COINS} from '../actions/coin_actions';

const CoinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  if (action.type === RECEIVE_COINS) {
    return (action.coins).reduce(
      (obj, coin) => Object.assign(obj, { [coin.id]: coin }), {});
  } else {
    return oldState;
  }

};

export default CoinsReducer;
 

