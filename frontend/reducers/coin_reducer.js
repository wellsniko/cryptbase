import {RECEIVE_COIN} from '../actions/coin_actions';


const CoinReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  if (action.type === RECEIVE_COIN) {
      console.log(action.coin)
      // console.log(action.coin, action.coin.id)
      return action.coin[0]
  } else {
    return oldState;
  }

};

export default CoinReducer;
 

// object = {1 : {name: "btc", id: "bitcoin"}}